import { Injectable } from '@angular/core';
import { BookContract } from '../book/book.contract';
import { AuthorService } from '../../../../author/common/service/author.service';
import { FormDataService } from '../../../../form-data/common/service/form-data.service';
import { RequestAuthorModel } from '../../../../author/common/model/request-author.model';
import { map } from 'rxjs/operators';
import { FullBookModel } from '../../model/full-book.model';

@Injectable()
export class NewBookFacade {
  constructor(
    private readonly bookService: BookContract,
    private readonly authorService: AuthorService,
    private readonly formDataService: FormDataService,
  ) {}

  createBookWithAuthor(data: FormData): Promise<FullBookModel> {
    let book: Promise<FullBookModel>;

    this.authorService.create(this.formDataService.objectToFormsData({
      name: data.get('author_name') as string,
      last_name: data.get('author_last_name') as string,
    }))
      .pipe(
        map(item => {
          data.delete('author_name');
          data.delete('author_last_name');
          data.append('author', item.id.toString());
          return this.bookService.add(data);
        }),
      ).subscribe((item) => {
        book = item.toPromise();
    });

    return book;
  }
}
