import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from "typeorm";
import { Order } from "../orders/entities/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ){ }

  create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  findAll() {
    return this.productRepository.find({
      relations: ['ratings'], // Include related ratings
    });
  }

  findOne(id: number) {
    return this.productRepository.findOne({where: { id }});
  }

  update(updateProductDto: UpdateProductDto) {
    return this.productRepository.save(updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
