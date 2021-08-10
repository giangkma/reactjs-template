import { IsEmail, MinLength, IsString } from 'class-validator';

export class UserAuthInfo {
    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(8)
    password!: string;
}
