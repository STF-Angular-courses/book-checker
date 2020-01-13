import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../common/model/book.model';
import { GraphqlService } from '../common/service/book/graphql.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: [ './book-item.component.scss' ]
})
export class BookItemComponent {
  constructor(private bookService: GraphqlService) {}

  @Input() book: BookModel;

  @Output() giveId = new EventEmitter<string>();

  openBook(id: string) {
    this.giveId.emit(id);
  }
}
