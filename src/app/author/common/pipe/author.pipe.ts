import { Pipe, PipeTransform } from '@angular/core';
import { AuthorModel } from '../model/author.model';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {
  transform(author: AuthorModel): string {
    return `${author.name} ${author.last_name}`;
  }
}
