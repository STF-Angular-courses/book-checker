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
import { FormDataModule } from '../form-data/form-data.module';
import { BookEditComponent } from './book-edit/book-edit.component';
import { PreloaderModule } from '../preloader/preloader.module';
import { NewBookFacade } from './common/service/facade/new-book.facade';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookShowComponent,
    BookAddComponent,
    ColorPipe,
    BookEditComponent,
  ],
  providers: [
    BookProvider,
    NewBookFacade,
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
    FormDataModule,
    PreloaderModule,
  ],
  exports: [
    BookListComponent,
    BookShowComponent,
    BookAddComponent,
  ],
})
export class BookModule { }
