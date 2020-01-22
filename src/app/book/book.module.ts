import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookShowComponent } from './book-show/book-show.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';
import { BookProvider } from './common/service/book/book.provider';
import { RouterModule } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from '../image/image.module';
import { AuthorModule } from '../author/author.module';
import { CategoryModule } from '../category/category.module';
import { ColorPipe } from './common/pipe/color.pipe';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookShowComponent,
    BookAddComponent,
    ColorPipe,
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
    MatInputModule,
    ReactiveFormsModule,
    ImageModule,
    AuthorModule,
    CategoryModule,
    MatOptionModule,
    MatSelectModule,
  ],
  exports: [
    BookListComponent,
    BookShowComponent,
    BookAddComponent,
  ],
})
export class BookModule { }
