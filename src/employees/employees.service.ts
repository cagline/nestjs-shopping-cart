import { Injectable } from '@nestjs/common';
import { Employees, EmployeeTire } from "./employees.entity";
import uuid from 'uuid';



@Injectable()
export class EmployeesService {
    private employees: Employees[] = [];

    findAll(){
        return this.employees;
    }

    create(firstName: string, lastName: string, designation: string, tier: EmployeeTire){
         const emp = {
             id: uuid(),
             firstName,
             lastName,
             designation,
             tier
         }
    }
}
