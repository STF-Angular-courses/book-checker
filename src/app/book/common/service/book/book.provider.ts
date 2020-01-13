import { BookContract } from './book.contract';
import { GraphqlService } from './graphql.service';

export const BookProvider = {
  provide: BookContract,
  useClass: GraphqlService,
}
