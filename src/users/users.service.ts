import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryFailedError, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);

      return   await this.userRepository.save(user).catch((error) =>{
      console.log(error.message)
      if (error instanceof QueryFailedError && error.message.includes('Duplicate')) {
        throw new HttpException('Username already exists', HttpStatus.CONFLICT);
      }
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    })

  }

  async findAll() {
    return this.userRepository.find();
  }


  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['ratings'], // Include related ratings
    });
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ username });
  }
  async update(updateUserDto: UpdateUserDto): Promise<void> {
    await this.userRepository.delete(updateUserDto.id);
  }
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
