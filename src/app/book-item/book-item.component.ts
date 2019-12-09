import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../common/services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: [ './book-item.component.scss' ]
})
export class BookItemComponent {
  constructor(private bookService: BookService) {}

  @Input() book: BookModel;

  @Output() giveId = new EventEmitter<number>();

  openBook(id: number) {
    console.log(id);
    this.giveId.emit(id);
  }
}
