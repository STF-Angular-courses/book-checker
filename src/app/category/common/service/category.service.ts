import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from '../model/category.model';
import { RestAbstract } from '../../../common/service/rest.abstract';

@Injectable()
export class CategoryService extends RestAbstract<CategoryModel> {
  protected readonly path: string = 'categories';

  constructor(protected readonly http: HttpClient) {
    super();
  }
}
