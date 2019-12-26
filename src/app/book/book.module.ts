import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookShowComponent } from './book-show/book-show.component';
import { AuthorPipe } from './common/pipe/author.pipe';
import { BookService } from './common/service/book.service';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookShowComponent,
    AuthorPipe,
  ],
  providers: [
    BookService,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
  ],
  exports: [
    BookListComponent,
    BookShowComponent,
  ],
})
export class BookModule { }
