import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from '../../interfaces';

export type UserDocument = User & Document;
@ObjectType()
@Schema()
@InputType('UserInputType')
export class User implements IUser {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  @Prop()
  name: string;
  @Field(() => String)
  @Prop()
  email: string;
  @Field(() => String)
  @Prop({})
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
