import { ObjectType, Field, Int, ID, InputType } from '@nestjs/graphql';
import { ICategory } from '../../interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CategoryDocument = Category & Document;
@ObjectType()
@Schema()
@InputType('CategoryInputType')
export class Category implements ICategory {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  @Prop()
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
