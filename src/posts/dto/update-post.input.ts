import { InputType, PartialType, OmitType } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@InputType()
export class UpdatePostInput extends PartialType(
  OmitType(Post, ['id', 'categories', 'user'], InputType),
) {}
