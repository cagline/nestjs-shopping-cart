import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { OrderStatus } from "../order.enum";

@Entity()
export class Order{
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	status: OrderStatus;

	@Column({ type: 'json' })
	orderData: any;

	@Column({ type: 'json' })
	deliveryData: any;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

}
