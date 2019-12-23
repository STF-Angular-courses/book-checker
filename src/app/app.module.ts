import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BookListComponent } from './book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookItemComponent } from './book-item/book-item.component';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { BookShowComponent } from './book-show/book-show.component';
import { BookService } from './common/services/book.service';
import { Base64Pipe } from './common/pipes/base64.pipe';
import { AuthorPipe } from './common/pipes/author.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent,
    BookShowComponent,
    Base64Pipe,
    AuthorPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [
    BookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
