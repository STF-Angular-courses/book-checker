import { BookContract } from './book.contract';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../../model/book.model';
import { FullBookModel } from '../../model/full-book.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorService } from '../../../../author/common/service/author.service';
import { CategoryService } from '../../../../category/common/service/category.service';

@Injectable()
export class ApiService extends BookContract {
  books: BookModel[];

  constructor(
    private readonly http: HttpClient,
    private readonly authorService: AuthorService,
    private readonly categoryService: CategoryService,
  ) {
    super();
    this.http.get<{ books: BookModel[] }>('http://localhost/api/books')
      .pipe(
        map(response => response.books),
      )
      .subscribe((items) => {
        this.books = items;
      });
  }

  add(book: Partial<BookModel>): Observable<BookModel> {

  }

  get(id: number): Observable<FullBookModel> {
    return this.http.get<BookModel>(`http://localhost/api/books/${id}`)
      .pipe(
        map((book) => {
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
            id: book.id,
            title: book.title,
          };
        })
      );
  }

  remove(id: number): void {
  }

}
