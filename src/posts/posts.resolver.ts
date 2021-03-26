import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { UsersService } from 'src/users/users.service';
import { CategoriesService } from 'src/categories/categories.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(
    @Args('id', { type: () => String }) id: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postsService.update(id, updatePostInput);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => String }) id: string) {
    return this.postsService.remove(id);
  }

  @ResolveField()
  user(@Parent() post: Post) {
    return this.usersService.findById(post.user);
  }

  @ResolveField()
  categories(@Parent() post: Post) {
    return this.categoriesService.findByIds(post.categories);
  }
}
