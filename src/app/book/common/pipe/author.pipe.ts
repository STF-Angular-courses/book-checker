import { Pipe, PipeTransform } from '@angular/core';
import { AuthorModel } from '../model/author.model';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(value: AuthorModel, lastname: boolean = false): string {
    return `${value.name} ${lastname ? value.lastname : ''}`;
  }

}
