import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FullBookModel } from '../common/model/full-book.model';
import { BookContract } from '../common/service/book/book.contract';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
})
export class BookShowComponent {
  constructor(private bookService: BookContract) { }

  @Input() book: Observable<FullBookModel>;
}
