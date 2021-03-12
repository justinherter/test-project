import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './user.interface';

@Entity()
export class User implements IUser {
  @Column()
  age: number;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  password: string;
}
