import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Vehicle, VehicleSchema } from "./schemas/vehicle.schema";
import { VehicleRepository } from "./vehicle.repository";
import { Employee, EmployeeSchema } from "../employees/schemas/employee.schema";

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService, VehicleRepository],
})
export class VehiclesModule {}
