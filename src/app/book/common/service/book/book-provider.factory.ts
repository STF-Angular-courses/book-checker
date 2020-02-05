import { Apollo } from 'apollo-angular';
// import { GraphqlService } from './graphql.service';
import { LocalstorageService } from './localstorage.service';

export function bookProviderFactory() {
  return (apollo: Apollo) => {
    // return localStorage.getItem('books') ? new LocalstorageService() : new GraphqlService(apollo);
  };
}
