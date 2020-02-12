import { ProgressTypeEnum } from '../../../enum/progres-type.enum';
import { Injectable } from '@angular/core';
import { ChangeProgressStrategyContract } from './change-progress-strategy.contract';
import { BookContract } from '../../../../../book/common/service/book/book.contract';
import { FormDataService } from '../../../../../form-data/common/service/form-data.service';
import { FullBookModel } from '../../../../../book/common/model/full-book.model';

@Injectable()
export class ChangePercentageProgressStrategy implements ChangeProgressStrategyContract {
  constructor(
    private readonly bookService: BookContract,
    private readonly formDataService: FormDataService,
  ) {}

  support(type: ProgressTypeEnum): boolean {
    return type === ProgressTypeEnum.PERCENTAGE;
  }

  process(book: FullBookModel, progress: number): void {
    const pages = Math.round(book.pages * progress / 100);

    this.bookService.update(book.id, this.formDataService.objectToFormsData({ progress: pages.toString() }))
      .subscribe(item => {
        console.log(item);
      });
  }
}
