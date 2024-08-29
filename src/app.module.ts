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
import { AuthModule } from "./auth/auth.module";
import { AppController } from "./app.controller";
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get("DATABASE_HOST"),
        port: configService.get("DATABASE_PORT"),
        username: configService.get("DATABASE_USER"),
        password: configService.get("DATABASE_PASS"),
        database: configService.get("DATABASE_NAME"),
        entities: [User,Order, Product, Rating],
        synchronize: true,
      }),
      inject:[ConfigService]
    }),
    AuthModule, UsersModule, OrdersModule, ProductsModule, RatingsModule],
})
export class AppModule {}
