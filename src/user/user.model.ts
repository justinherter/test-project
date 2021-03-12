import { IUser } from './user.interface';
export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  isActive: boolean;
  password: string;
  constructor(params: IUser) {
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.age = params.age;
    this.isActive = params.isActive;
    this.password = params.password;
  }
}
