import { Component, EventEmitter, Output } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../common/services/book.service';

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
