import { Pipe, PipeTransform } from '@angular/core';
import { AuthorModel } from '../model/author.model';
import { BookModel } from '../model/book.model';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(book: BookModel): string {
    return `${book.author_name} ${book.author_last_name}`;
  }

}
