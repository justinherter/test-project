import { Module } from '@nestjs/common';
import { UsersModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';

@Module({
  imports: [UsersModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserHttpModule {}
