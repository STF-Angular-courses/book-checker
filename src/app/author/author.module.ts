import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthorService } from './common/service/author.service';
import { AuthorPipe } from './common/pipe/author.pipe';

@NgModule({
  declarations: [
    AuthorPipe,
  ],
  providers: [
    AuthorService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    AuthorPipe,
  ]
})
export class AuthorModule { }
