import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus } from "../user.enum";

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

	@Column({ length: 50 })
	password: string;

	@Column()
	status:UserStatus
}
