import { EmployeeStatus, EmployeeTire } from "../employees.enum";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Vehicle } from "../../vehicles/schemas/vehicle.schema";
export type EmployeeDocument = Employee & Document;
@Schema()
export class Employee {
    @Prop()
    id: string
    @Prop({required: true})
    firstName: string
    @Prop({required: true})
    lastName: string
    @Prop()
    designation: string
    @Prop()
    tier:EmployeeTire
    @Prop()
    status:EmployeeStatus
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }])
    vehicles: mongoose.Types.ObjectId[];  // Array of Vehicle ObjectIds

}

export const EmployeeSchema =  SchemaFactory.createForClass(Employee)