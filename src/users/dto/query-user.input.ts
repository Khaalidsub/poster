import { PartialType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

export class QueryUserInput extends PartialType(User) {}
