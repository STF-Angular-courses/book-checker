import { BookContract } from './book.contract';
import { ApiService } from './api.service';

export const BookProvider = {
  provide: BookContract,
  useClass: ApiService,
};
