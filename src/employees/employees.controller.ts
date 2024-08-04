import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmployeesService } from "./employees.service";

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get()
    findAll() {
        return this.employeesService.findAll();
    }

    @Post()
    create(@Body('firstName') firstName: string,
           @Body('lastName') lastName: string,
           @Body('designation') designation: string,
           @Body('nearestCity') nearestCity: string,
           @Body('tire') tire: number){
        this.employeesService.create(firstName, lastName, designation, tire)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // return this.employeesService.findOne(+id);
    }

}
