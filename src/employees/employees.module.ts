import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from "./employees.service";
import { EmployeeRepository } from "./employee.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Employee, EmployeeSchema } from "src/employees/schemas/employee.schema";
import { Vehicle, VehicleSchema } from "../vehicles/schemas/vehicle.schema";

@Module({
  imports:[
      MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
      MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService,EmployeeRepository],
})
export class EmployeesModule {}
