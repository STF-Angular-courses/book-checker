import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookModel } from '../common/model/book.model';
import { BookContract } from '../common/service/book/book.contract';
import { AuthorService } from '../../author/common/service/author.service';
import { AuthorModel } from '../../author/common/model/author.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
})
export class BookItemComponent implements OnInit {
  constructor(
    private bookService: BookContract,
    private authorService: AuthorService,
  ) {}

  @Input() book: BookModel;
  author: Observable<AuthorModel>;

  ngOnInit(): void {
    this.author = this.authorService.get(this.book.author_id);
  }
}
