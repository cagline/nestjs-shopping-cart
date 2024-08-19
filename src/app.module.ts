import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule } from "@nestjs/mongoose";
import { VehiclesModule } from './vehicles/vehicles.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from "./app.controller";
const MONOGO_CONNECTION= "mongodb+srv://cagline:7CLn7FWNMLHh1pe8@shoping-cart-example.pnohirb.mongodb.net/?retryWrites=true&w=majority&appName=shoping-cart-example";
@Module({
  controllers: [AppController],
  imports: [UsersModule, EmployeesModule, MongooseModule.forRoot(MONOGO_CONNECTION), VehiclesModule, AuthModule],
})
export class AppModule {}
