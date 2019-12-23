import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../common/service/book.service';
import { BookModel } from '../common/model/book.model';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
})
export class BookShowComponent {
  constructor(private bookService: BookService) { }

  @Input() bookId: number;

  get book(): BookModel {
    return this.bookService.books.find((book) => book.uid === this.bookId);
  }
}
