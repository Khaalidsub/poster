import { ICategory, IPost } from '../../interfaces';
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Category } from '../../categories/entities/category.entity';
import { User, UserSchema } from '../../users/entities/user.entity';
import * as mongoose from 'mongoose';
export type PostDocument = Post & Document;
@ObjectType()
@Schema()
@InputType('PostInputType')
export class Post implements IPost {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  @Prop()
  title: string;
  @Field(() => String)
  @Prop()
  body: string;
  @Field(() => [Category])
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }],
  })
  categories: string[];
  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
