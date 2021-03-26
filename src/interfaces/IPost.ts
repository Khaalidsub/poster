import { ICategory } from './ICategory';

export interface IPost {
  id: string;
  title: string;
  body: string;
  categories: string[];
  user: string;
}
