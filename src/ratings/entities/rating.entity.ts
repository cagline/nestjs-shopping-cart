import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	PrimaryColumn,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';
import { User } from "../../users/entities/user.entity";
import { Product } from "../../products/entities/product.entity";

@Entity()
export class Rating {
	@PrimaryColumn()
	userId: number;

	@PrimaryColumn()
	productId: number;

	@Column('int')
	rating: number; // Rating value, e.g., 1 to 5

	@Column('text', { nullable: true })
	review: string; // Optional review text

	@ManyToOne(() => User, (user) => user.ratings, { onDelete: 'CASCADE' })
	user: User;

	@ManyToOne(() => Product, (product) => product.ratings, { onDelete: 'CASCADE' })
	product: Product;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
