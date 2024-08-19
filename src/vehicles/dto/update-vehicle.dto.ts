import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle.dto';
import { IsNotEmpty } from "class-validator";

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {
    id: string
    @IsNotEmpty()
    make: string
    @IsNotEmpty()
    model: string
    employeeId: number
}
