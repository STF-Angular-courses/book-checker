import { Observable } from 'rxjs';
import { BookModel } from '../../model/book.model';
import { FullBookModel } from '../../model/full-book.model';

export abstract class BookContract {
  abstract books: BookModel[];

  abstract get(id: number): Observable<FullBookModel>;

  abstract add(): void;

  abstract remove(id: number): void;
}
