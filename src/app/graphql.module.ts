import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';

export function createApollo(httpLink: HttpLink) {
  const auth = setContext(() => ({
    headers: {
      Authorization: environment.apiKey
    }
  }));

  return {
    link: ApolloLink.from([auth, httpLink.create({ uri: environment.graphQlUrl })]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
