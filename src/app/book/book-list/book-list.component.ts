import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from '../common/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  constructor(private bookService: BookService) {}

  @Output() showBook = new EventEmitter<number>();

  processBookById(id: number): void {
    this.showBook.emit(id);
  }
}
