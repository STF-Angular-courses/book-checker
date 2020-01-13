import { Pipe, PipeTransform } from '@angular/core';
import { FullBookModel } from '../model/full-book.model';
import { BookModel } from '../model/book.model';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(book: FullBookModel | BookModel): string {
    return `${book.authorName} ${book.authorLastName}`;
  }

}
