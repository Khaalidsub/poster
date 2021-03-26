import { InputType, Int, Field, PartialType, OmitType } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@InputType()
export class CreatePostInput extends PartialType(
  OmitType(Post, ['id', 'categories', 'user'], InputType),
) {
  @Field(() => [String])
  categories: string[];
  @Field(() => String)
  user: string;
}
