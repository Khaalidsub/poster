import { InputType, Field, Int, PartialType, OmitType } from '@nestjs/graphql';
import { Category } from '../entities/category.entity';

@InputType()
export class UpdateCategoryInput extends PartialType(
  OmitType(Category, ['id'], InputType),
) {}
