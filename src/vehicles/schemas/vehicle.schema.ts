import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Employee } from "../../employees/schemas/employee.schema";
import mongoose, { Document } from "mongoose";
export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
    @Prop()
    id: string
    @Prop({required: true})
    make: string
    @Prop({required: true})
    model: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true })
    employee: mongoose.Types.ObjectId;  // Reference to the owning Employee
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle)
