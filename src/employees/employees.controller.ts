import { Body, Controller, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from "./employees.service";
import { SearchEmployeeDto } from "./dto/search-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Employee } from "src/employees/schemas/employee.schema";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { EmployeeTierValidationPipe } from "./employee-tier-validation.pipe";

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get()
    findAll(@Query() params: SearchEmployeeDto) {
        // if(Object.keys(params).length){
        //     console.log('findAll params:',params)
        //     // return this.employeesService.search(params);
        // }else {
            console.log('findAll:')
            return this.employeesService.findAll();
        // }
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(EmployeeTierValidationPipe)
    create(@Body() employeeCreateDto : CreateEmployeeDto){
        return this.employeesService.create(employeeCreateDto)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {

        return this.employeesService.findOne(id);
    }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() employeeUpdateDto: UpdateEmployeeDto): Employee {
    //     employeeUpdateDto.id = id;
    //     return this.employeesService.update(employeeUpdateDto);
    // }
}
