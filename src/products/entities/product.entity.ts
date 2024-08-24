import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Rating } from "../../ratings/entities/rating.entity";

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	name: string;

	@Column('text')
	description: string;

	@Column('decimal', { precision: 10, scale: 2 })
	price: number;

	@OneToMany(() => Rating, (productRating) => productRating.product)
	ratings: Rating[];

}
