import { ProgressTypeEnum } from '../../../enum/progres-type.enum';
import { FullBookModel } from '../../../../../book/common/model/full-book.model';

export interface ChangeProgressStrategyContract {
  support(type: ProgressTypeEnum): boolean;

  process(book: FullBookModel, progress: number): void;
}
