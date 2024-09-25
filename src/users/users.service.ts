import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryFailedError, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from '../auth/auth.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Hashes the password with the user's unique salt
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // You can adjust the number of salt rounds
    return bcrypt.hash(password, saltRounds);
  }

  // Creates a new user
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.hashPassword(createUserDto.password);

    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return await this.userRepository.save(user).catch((error) => {
      console.log(error.message);
      if (
        error instanceof QueryFailedError &&
        error.message.includes('Duplicate')
      ) {
        throw new HttpException('Username already exists', HttpStatus.CONFLICT);
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
  }

  // Updates a user
  async update(updateUserDto: UpdateUserDto): Promise<void> {
    if (updateUserDto.password) {
      updateUserDto.password = await this.hashPassword(updateUserDto.password);
      console.log('updateUserDto', updateUserDto);
      await this.userRepository.update(updateUserDto.id, {
        ...updateUserDto,
        password: updateUserDto.password,
      });
    } else {
      await this.userRepository.update(updateUserDto.id, updateUserDto);
    }
  }

  // Finds all users
  async findAll() {
    return this.userRepository.find();
  }

  // Finds a user by ID
  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['ratings', 'ratings.product'], // Include related ratings
    });
  }

  // Finds a user by username
  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ username });
  }

  // Deletes a user
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
