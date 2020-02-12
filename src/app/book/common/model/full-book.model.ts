import { AuthorModel } from '../../../author/common/model/author.model';
import { CategoryModel } from '../../../category/common/model/category.model';
import { Observable } from 'rxjs';

export interface FullBookModel {
  author: Observable<AuthorModel>;
  category: Observable<CategoryModel>;
  updated_at: string;
  created_at: string;
  title: string;
  screen: string;
  id: number;
  description: string;
  pages: number;
  progress: number;
}
