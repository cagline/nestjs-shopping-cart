import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./users/entities/user.entity";
import { Order } from "./orders/entities/order.entity";
import { ProductsModule } from './products/products.module';
import { RatingsModule } from './ratings/ratings.module';
import { Product } from "./products/entities/product.entity";
import { Rating } from "./ratings/entities/rating.entity";

@Module({
  controllers: [],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Sho@cart',
      database: 'shoppingcart',
      entities: [User,Order, Product, Rating],
      synchronize: true,
    }),

    UsersModule, OrdersModule, ProductsModule, RatingsModule],
})
export class AppModule {}
