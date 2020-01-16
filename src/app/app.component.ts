import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FullBookModel } from './book/common/model/full-book.model';
import { BookContract } from './book/common/service/book/book.contract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  activeList = true;
  book: Observable<FullBookModel> | null = null;

  constructor(private bookService: BookContract) {}

  showBook(id: string): void {
    this.book = this.bookService.get(id);
    this.activeList = false;
  }

  backToList(): void {
    this.book = null;
    this.activeList = true;
  }
}
