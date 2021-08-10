import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserAuthInfo {
    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @MinLength(5)
    password!: string;
}
