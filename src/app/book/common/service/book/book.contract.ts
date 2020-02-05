import { Observable } from 'rxjs';
import { BookModel } from '../../model/book.model';
import { FullBookModel } from '../../model/full-book.model';

export abstract class BookContract {
  abstract books: BookModel[];

  abstract get(id: number): Observable<FullBookModel>;

  abstract add(data: FormData): Observable<FullBookModel>;

  abstract update(id: number, data: FormData): Observable<FullBookModel>;

  abstract remove(id: number): Observable<void>;
}
