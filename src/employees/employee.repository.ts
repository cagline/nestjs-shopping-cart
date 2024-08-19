import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Employee, EmployeeDocument } from "src/employees/schemas/employee.schema";
import { Model } from "mongoose";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { Vehicle } from "../vehicles/schemas/vehicle.schema";

@Injectable()
export class EmployeeRepository {
    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
        @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
    ){

    }

    async create(employeeCreateDto: CreateEmployeeDto): Promise<Employee>{
        let newEmp = new this.employeeModel(employeeCreateDto);
        return await newEmp.save();
    }

    async findAll():Promise<Employee[]>{
        return this.employeeModel.find().populate('vehicles');
    }


    async findOne(id):Promise<Employee>{
        return this.employeeModel.findById(id).populate('vehicles');
    }

    async update(id):Promise<Employee>{
        return this.employeeModel.findById(id);
    }
}