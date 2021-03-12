import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserEntity } from './user.entity';
import { User } from './user.model';
import { IUser } from './user.interface';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  users: User[] = [];
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  fetchAll(): Promise<UserDto> {
    console.log('fetching...');
    return this.userRepository
      .findOneOrFail(1234)
      .then((user: User) => {
        console.log('user: ', user);
        return user;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }

  findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<UserDto> {
    console.log('user id: ', id);
    return this.userRepository
      .findOne(id)
      .then((user: User) => {
        console.log('User: ', user);
        return user;
      })
      .catch((err: any) => {
        console.error(err);
        throw err;
      });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(userParams: IUser): Promise<UserDto> {
    const newUser = new User(userParams);
    const user: Promise<UserDto> = this.userRepository
      .save(newUser)
      .catch((err) => {
        console.error(err);
        throw err;
      });
    return user;
  }
}
