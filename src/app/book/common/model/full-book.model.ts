import { BookModel } from './book.model';

export interface FullBookModel extends BookModel {
  pages: number;
  date?: Date;
  progress: number;
}
