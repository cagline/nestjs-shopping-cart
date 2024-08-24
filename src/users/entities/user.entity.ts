import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserStatus } from "../user.enum";
import { Order } from "../../orders/entities/order.entity";
import { Rating } from "../../ratings/entities/rating.entity";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 50 })
	firstName: string;

	@Column({ length: 50 })
	lastName: string;

	@Column({ length: 50 , unique: true })
	username: string;

	@Column({ length: 64 })
	password: string;

	@Column()
	status:UserStatus

	@OneToMany(() => Order, order => order.user)
	orders: Order[];

	@OneToMany(() => Rating, (productRating) => productRating.user)
	ratings: Rating[];
}
