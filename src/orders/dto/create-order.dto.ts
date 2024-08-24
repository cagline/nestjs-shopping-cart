import { OrderStatus } from "../order.enum";

export class CreateOrderDto {
	status: OrderStatus;
	orderData: any;
	deliveryData: any;
	createdAt: Date;
	updatedAt: Date;
	userId: number;
}
