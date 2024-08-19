import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { EmployeeRepository } from "../employees/employee.repository";
import { VehicleRepository } from "./vehicle.repository";

@Injectable()
export class VehiclesService {

  constructor(private vehicleRepository: VehicleRepository) {

  }

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicleRepository.create(createVehicleDto);
  }

  findAll() {
    return this.vehicleRepository.findAll();

  }

  findOne(id: string) {
    return this.vehicleRepository.findOne(id);
  }

  update(updateVehicleDto: UpdateVehicleDto) {
    console.log('s',updateVehicleDto);

    return this.vehicleRepository.update(updateVehicleDto);
  }

  delete(id: string) {
    return this.vehicleRepository.delete(id);
  }
}
