import { Component } from '@angular/core';
import { BookModel } from './book/common/model/book.model';
import { BookService } from './book/common/service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  activeList = true;
  bookId: number | null = null;

  constructor(private bookService: BookService) {}

  showBook(id: number): void {
    this.bookId = id;
    this.activeList = false;
  }

  backToList(): void {
    this.bookId = null;
    this.activeList = true;
  }
}
