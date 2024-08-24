import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from "./app.controller";
import { OrdersModule } from './orders/orders.module';
import { RatingsModule } from './ratings/ratings.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./users/entities/user.entity";
import { Order } from "./orders/entities/order.entity";

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
      entities: [User,Order],
      synchronize: true,
    }),

    UsersModule, OrdersModule],
})
export class AppModule {}
