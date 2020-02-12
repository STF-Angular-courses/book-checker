import { BookContract } from './book.contract';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../../model/book.model';
import { FullBookModel } from '../../model/full-book.model';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthorService } from '../../../../author/common/service/author.service';
import { CategoryService } from '../../../../category/common/service/category.service';
import { BookIncorrectException } from '../../exception/book-incorrect.exception';

@Injectable()
export class ApiService extends BookContract {
  private readonly baseUrl = 'http://localhost/api/books';

  books: BookModel[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly authorService: AuthorService,
    private readonly categoryService: CategoryService,
  ) {
    super();
    this.http.get<{ books: BookModel[] }>(this.baseUrl)
      .pipe(
        map(response => response.books),
      )
      .subscribe((items) => {
        window.setTimeout(() => this.books = items, 3000);
      });
  }

  add(data: FormData): Observable<FullBookModel> {
    return this.http.post<BookModel>(this.baseUrl, data).pipe(
      tap(book => this.books.push(book)),
      map(this.mapBook),
      catchError((item) => {
        throw new BookIncorrectException();
      }),
    );
  }

  update(id: number, data: FormData): Observable<FullBookModel> {
    data.append('_method', 'put');

    return this.http.post<BookModel>(`${this.baseUrl}/${id}`, data).pipe(
      tap((book) => {
        const updatedIndex = this.books.findIndex(item => item.id === book.id);

        if (updatedIndex < 0) {
          return book;
        }

        this.books[updatedIndex] = book;
        return book;
      }),
      map(this.mapBook),
      catchError((item) => {
        throw new BookIncorrectException();
      }),
    );
  }

  get(id: number): Observable<FullBookModel> {
    return this.http.get<BookModel>(`${this.baseUrl}/${id}`)
      .pipe(
        map(this.mapBook),
      );
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(
        tap(() => {
          const deletedIndex = this.books.findIndex((book) => book.id === id);

          if (deletedIndex < 0) {
            return;
          }

          this.books.splice(deletedIndex, 1);
        })
      );
  }

  private mapBook: (book: BookModel) => FullBookModel = (book) => {
    const author = this.authorService.get(book.author_id);
    const category = this.categoryService.get(book.author_id);

    return {
      pages: book.pages,
      screen: book.screen,
      author,
      category,
      created_at: book.created_at,
      updated_at: book.updated_at,
      description: book.description,
      progress: book.progress,
      id: book.id,
      title: book.title,
    };
  }
}
