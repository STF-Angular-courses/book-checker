import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../common/model/book.model';
import { BookContract } from '../common/service/book/book.contract';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: [ './book-item.component.scss' ]
})
export class BookItemComponent {
  constructor(private bookService: BookContract) {}

  @Input() book: BookModel;
}
