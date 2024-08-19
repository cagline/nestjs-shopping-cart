import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { Employee } from "src/employees/schemas/employee.schema";
import { EmployeeRepository } from "./employee.repository";




@Injectable()
export class EmployeesService {
    constructor(private employeeRepository: EmployeeRepository) {

    }

    findAll():Promise<Employee[]>{
        return this.employeeRepository.findAll();
    }

    create(employeeCrateDto: CreateEmployeeDto): Promise<Employee>{
         return this.employeeRepository.create(employeeCrateDto);

    }

    // search(employeeSearchDto: SearchEmployeeDto){
    //     const {name, status} = employeeSearchDto;
    //     let employees = this.findAll();
    //     if(status){
    //         employees = employees.filter((e)=>e.status = status )
    //     }
    //     if(name){
    //         employees = employees.filter((e=>e.firstName.includes(name)|| e.lastName.includes(name)))
    //     }
    //     console.info(employees)
    //     return employees;
    // }

    findOne(id:string):Promise<Employee>{
        return this.employeeRepository.findOne(id);
    }

    // update(employeeUpdateDto:UpdateEmployeeDto): Employee{
    //     const {id, lastName } = employeeUpdateDto;
    //     let emp = this.findOne(id);
    //     console.log('emp'+ JSON.stringify(emp))
    //     emp.lastName = lastName;
    //     return emp;
    // }

}
