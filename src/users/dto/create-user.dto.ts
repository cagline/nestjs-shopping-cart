import { IsNotEmpty } from "class-validator";
import { UserStatus } from "../user.enum";

export class CreateUserDto {
	@IsNotEmpty()
	firstName: string

	@IsNotEmpty()
	lastName: string

	@IsNotEmpty()
	username: string;

	@IsNotEmpty()
	password: string;
	
	status: UserStatus
}
