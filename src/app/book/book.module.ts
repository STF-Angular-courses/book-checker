import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookShowComponent } from './book-show/book-show.component';
import { AuthorPipe } from './common/pipe/author.pipe';
import { BookService } from './common/service/book.service';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { ImageModule } from '../image/image.module';

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
    ImageModule,
  ],
  exports: [
    BookListComponent,
    BookShowComponent,
  ]
})
export class BookModule { }
