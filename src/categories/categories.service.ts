import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category, CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}
  create(createCategoryInput: CreateCategoryInput) {
    return new this.categoryModel(createCategoryInput).save();
  }

  findAll() {
    return this.categoryModel.find({});
  }

  findByIds(ids: string[]) {
    return this.categoryModel.find({ _id: { $in: [...ids] } });
  }

  findById(id: string) {
    return this.categoryModel.findById(id);
  }

  update(id: string, updateCategoryInput: UpdateCategoryInput) {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryInput, {
      new: true,
    });
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id);
  }
}
