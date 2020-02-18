import { Component, OnInit } from '@angular/core';
import { BookContract } from '../common/service/book/book.contract';
import { ActivatedRoute } from '@angular/router';
import { FullBookModel } from '../common/model/full-book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
})
export class BookShowComponent implements OnInit {
  book?: Observable<FullBookModel>;

  constructor(
    private bookService: BookContract,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: number = parseInt(params.get('id'), 10);

      this.book = this.bookService.get(id);
    });
  }
}
