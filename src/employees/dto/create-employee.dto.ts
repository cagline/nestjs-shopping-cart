import { EmployeeStatus, EmployeeTire } from "../employees.enum";
import { IsNotEmpty, NotEquals } from "class-validator";

export class CreateEmployeeDto {
    id: string
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    @NotEquals('CEO')
    designation: string
    tier:EmployeeTire
    status:EmployeeStatus
}