import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}
  create(createPostInput: CreatePostInput) {
    return new this.postModel(createPostInput).save();
  }

  findAll() {
    return this.postModel.find({});
  }

  findOne(id: string) {
    return this.postModel.findById(id);
  }

  update(id: string, updatePostInput: UpdatePostInput) {
    return this.postModel.findByIdAndUpdate(id, updatePostInput, { new: true });
  }

  remove(id: string) {
    return this.postModel.findByIdAndDelete(id);
  }
  getUser(id: string) {
    return this.postModel.findById(id).populate('user').exec();
  }
}
