import { Injectable } from '@angular/core';
import { BookModel } from '../../model/book.model';
import { FullBookModel } from '../../model/full-book.model';
import { Observable, of } from 'rxjs';
import { BookContract } from './book.contract';

@Injectable()
export class LocalstorageService extends BookContract {
  public books: BookModel[] = [];

  constructor() {
    super();

    this.books = JSON.parse(localStorage.getItem('books')) as BookModel[];
  }

  get(id: number): Observable<FullBookModel> {
    const book = JSON.parse(localStorage.getItem(`book${id}`)) as FullBookModel;

    return of(book);
  }

  add(): void {
    return;
  }

  remove(id: number): void {
    return;
  }
}
