import { Observable } from 'rxjs';
import { FullBookModel } from '../../model/full-book.model';
import { BookModel } from '../../model/book.model';

export abstract class BookContract {
  abstract books: BookModel[];

  abstract get(id: string): Observable<FullBookModel>;

  abstract add(): void;

  abstract remove(id: string): void;
}
