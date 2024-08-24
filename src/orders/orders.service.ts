import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { QueryFailedError, Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { OrderStatus } from "./order.enum";
import { User } from "../users/entities/user.entity";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

  ) {}

  async create(createOrderDto: CreateOrderDto) {

    createOrderDto.status = OrderStatus.PENDING;

    const order = this.orderRepository.create(createOrderDto);

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
