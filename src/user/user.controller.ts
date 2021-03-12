import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { IUser } from './user.interface';
// import { IDisplayUser } from '../interfaces/user.display.interface';
import { UserService } from './user.service';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  sampleUser: User;
  constructor(private readonly userService: UserService) {
    this.sampleUser = {
      id: 1234,
      firstName: 'firstName',
      lastName: 'firstName',
      age: 33,
      isActive: true,
      password: 'xyz123',
    };
  }
  @Get(':id')
  fetchUser(@Param('id') id: number): Promise<UserDto> {
    return this.userService.findOne(id);
  }
  // @Get('all')
  // fetchAll(): Promise<UserDto> {
  //   return this.userService.fetchAll();
  // }
  @Post()
  createUser(@Body() fullBody: IUser): Promise<UserDto> {
    return this.userService.create(fullBody);
  }
}
