import { IsNotEmpty } from "class-validator";

export class CreateVehicleDto {
    id: string
    @IsNotEmpty()
    make: string
    @IsNotEmpty()
    model: string
    employee: number
}
