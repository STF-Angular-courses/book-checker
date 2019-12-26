import { AuthorModel } from './author.model';

export interface BookModel {
  pages: number;
  author_name: string;
  author_last_name: string;
  date?: Date;
  title: string;
  screen?: string;
  uid: number;
  description: string;
  progress: number;
}
