export interface UserToken {
    authToken: string;
}

export enum UserRole {
    admin = 'admin',
}

export enum UserType {}

// user in this context means app's authentication user including creator, organization leader ...
export interface User {
    id: number;
    username: string;
    role: UserRole;
}

export interface ResponseAuth {
    accessToken: string;
    information: User;
}

export interface DataLogin {
    username: string;
    password: string;
}
