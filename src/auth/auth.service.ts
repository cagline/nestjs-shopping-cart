import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        console.log('AuthService validateUser',username, pass);
        const user = await this.usersService.findOneByUsername(username);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user; // Exclude sensitive fields
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
