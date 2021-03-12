import { OmitType } from '@nestjs/swagger';
import { User } from './user.model';

export class UserDto extends OmitType(User, ['password'] as const) {}
