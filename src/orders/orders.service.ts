import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${updateOrderDto.id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
