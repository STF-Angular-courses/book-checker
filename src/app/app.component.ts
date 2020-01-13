import { Component } from '@angular/core';
import { GraphqlService } from './book/common/service/book/graphql.service';
import { Observable } from 'rxjs';
import { FullBookModel } from './book/common/model/full-book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  activeList = true;
  book: Observable<FullBookModel> | null = null;

  constructor(private bookService: GraphqlService) {}

  showBook(id: string): void {
    this.book = this.bookService.get(id);
    this.activeList = false;
  }

  backToList(): void {
    this.book = null;
    this.activeList = true;
  }
}
