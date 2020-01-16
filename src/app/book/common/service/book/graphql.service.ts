import { Injectable } from '@angular/core';
import { BookModel } from '../../model/book.model';
import { Apollo } from 'apollo-angular';
import { BOOKS_QUERY } from '../../query/books.query';
import { catchError, map } from 'rxjs/operators';
import { FullBookModel } from '../../model/full-book.model';
import { BOOK_QUERY } from '../../query/book.query';
import { Observable } from 'rxjs';
import { BookContract } from './book.contract';

@Injectable()
export class GraphqlService extends BookContract {
  public books: BookModel[] = [];

  constructor(private apollo: Apollo) {
    super();

    this.apollo.query<{ allBooks: BookModel[] }>({
      query: BOOKS_QUERY,
    })
      .pipe(
        map((item) => item.data.allBooks),
        catchError((data) => {
          throw new Error('asdasd');
        })
      )
      .subscribe(items => {
        this.books = items;
      });
  }

  get(id: string): Observable<FullBookModel> {
    return this.apollo.query<{ book: FullBookModel }>({
      query: BOOK_QUERY,
      variables: {
        id,
      }
    }).pipe(
      map((item) => item.data.book),
    );
  }

  add(): void {
    const lastId = this.books[this.books.length - 1].uid;
    const newId = lastId + 1;
  }

  remove(id: string): void {
    const deleteIndex = this.books.findIndex((book) => book.uid === id);

    this.books.splice(deleteIndex, 1);
  }
}
