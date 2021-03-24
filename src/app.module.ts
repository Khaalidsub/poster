import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/typeDef/schema.gql'),
      include: [UsersModule, CategoriesModule],
      sortSchema: true,
      tracing: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/poster', {
      useFindAndModify: false,
    }),
    UsersModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
