import { ProgressTypeEnum } from '../../../enum/progres-type.enum';
import { Injectable } from '@angular/core';
import { ChangeProgressStrategyContract } from './change-progress-strategy.contract';
import { BookContract } from '../../../../../book/common/service/book/book.contract';
import { FormDataService } from '../../../../../form-data/common/service/form-data.service';
import { FullBookModel } from '../../../../../book/common/model/full-book.model';

@Injectable()
export class ChangePageProgressStrategy implements ChangeProgressStrategyContract {
  constructor(
    private readonly bookService: BookContract,
    private readonly formDataService: FormDataService,
  ) {}

  support(type: ProgressTypeEnum): boolean {
    return type === ProgressTypeEnum.PAGES;
  }

  process(book: FullBookModel, progress: number): void {
    this.bookService.update(book.id, this.formDataService.objectToFormsData({ progress: progress.toString() }))
      .subscribe(item => {
        console.log(item);
      });
  }
}
