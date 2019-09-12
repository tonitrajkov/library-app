import { IRole } from "./role";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string; 
    userName: string;
    email: string;
    isActive: boolean;
    imageUrl: string;
    roles: IRole[];
    password: string;
}