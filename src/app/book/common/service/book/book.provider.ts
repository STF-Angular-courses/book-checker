import { BookContract } from './book.contract';
import { Apollo } from 'apollo-angular';
import { bookProviderFactory } from './book-provider.factory';

export const BookProvider = {
  provide: BookContract,
  useFactory: bookProviderFactory(),
  deps: [
    Apollo,
  ]
};
