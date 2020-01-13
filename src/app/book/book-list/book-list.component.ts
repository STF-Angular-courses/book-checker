import { Component, EventEmitter, Output } from '@angular/core';
import { GraphqlService } from '../common/service/book/graphql.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  constructor(private bookService: GraphqlService) {}

  @Output() showBook = new EventEmitter<string>();

  processBookById(id: string): void {
    this.showBook.emit(id);
  }
}
