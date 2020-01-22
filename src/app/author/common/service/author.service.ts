import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel } from '../model/author.model';
import { RestAbstract } from '../../../common/service/rest.abstract';

@Injectable()
export class AuthorService extends RestAbstract<AuthorModel> {
  protected readonly path: string = 'authors';

  constructor(protected readonly http: HttpClient) {
    super();
  }
}
