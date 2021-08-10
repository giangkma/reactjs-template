export interface UserToken {
    authToken: string;
}

export enum UserType {
    Creator = 'Creator',
    NextOfKin = 'NextOfKin',
}

// user in this context means app's authentication user including creator, organization leader ...
export interface User {
    id: number;
    avatar: string;
    username: string;
    name: string;
    type: UserType;
    createdDate: Date;
    updatedDate: Date;
}
