import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Vehicle, VehicleDocument } from "./schemas/vehicle.schema";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";

@Injectable()
export class VehicleRepository {
    constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>){

    }

    async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle>{
        let newVehicle = new this.vehicleModel(createVehicleDto);
        return await newVehicle.save();
    }

    async findAll():Promise<Vehicle[]>{
        return this.vehicleModel.find().populate('employee');
    }


    async findOne(id):Promise<Vehicle>{
        return this.vehicleModel.findById(id);
    }

    async update(data):Promise<any>{
        console.log('r',data);

        return this.vehicleModel.updateOne(data);
    }

    async delete(id):Promise<any>{
        return this.vehicleModel.deleteOne(id);
    }
}