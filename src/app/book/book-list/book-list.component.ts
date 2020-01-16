import { Component, EventEmitter, Output } from '@angular/core';
import { BookContract } from '../common/service/book/book.contract';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  constructor(private bookService: BookContract) {}
}
