import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookShowComponent } from './book-show/book-show.component';
import { AuthorPipe } from './common/pipe/author.pipe';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';
import { BookProvider } from './common/service/book/book.provider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookShowComponent,
    AuthorPipe,
  ],
  providers: [
    BookProvider,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    GraphQLModule,
    RouterModule,
  ],
  exports: [
    BookListComponent,
    BookShowComponent,
  ],
})
export class BookModule { }
