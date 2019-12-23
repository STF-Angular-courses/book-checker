import { AuthorModel } from './author.model';

export interface BookModel {
  pages: number;
  author: AuthorModel;
  date?: Date;
  title: string;
  screen?: string;
  uid: number;
  description: string;
  progress: number;
}
