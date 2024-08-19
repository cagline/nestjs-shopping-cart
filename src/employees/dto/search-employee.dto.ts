import { EmployeeStatus } from "../employees.enum";

export interface SearchEmployeeDto {
    status: EmployeeStatus,
    name: string
}