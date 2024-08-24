import { OrderStatus } from "../order.enum";
import { User } from "../../users/entities/user.entity";

export class CreateOrderDto {
	status: OrderStatus;
	orderData: any;
	deliveryData: any;
	createdAt: Date;
	updatedAt: Date;
	userId: number;
	user: User;
}
