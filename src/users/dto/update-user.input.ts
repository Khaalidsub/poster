import { InputType, Field, Int, PartialType, OmitType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class UpdateUserInput extends PartialType(OmitType(User, ['id'])) {}
