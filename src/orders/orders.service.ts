import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { QueryFailedError, Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { OrderStatus } from "./order.enum";
import { UsersService } from '../users/users.service'; // Import UserService

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly userService: UsersService, // Inject UserService


  ) {}

  async create(createOrderDto: CreateOrderDto) {

    const user = await this.userService.findOne(createOrderDto.userId);
    if (!user) {
      throw new Error('User not found');
    }

    const order = this.orderRepository.create({
      status: createOrderDto.status || OrderStatus.PENDING,
      orderData: createOrderDto.orderData,
      deliveryData: createOrderDto.deliveryData,
      user: user,
    });

    return await this.orderRepository.save(order).catch((error) => {
      console.log(error.message)
      if (error instanceof QueryFailedError && error.message.includes('Duplicate')) {
        throw new HttpException('Username already exists', HttpStatus.CONFLICT);
      }
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    })

  }


  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy({id});

  }

  update(updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${updateOrderDto.id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
