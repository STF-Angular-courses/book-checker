import { Routes } from '@angular/router';
import { BookListComponent } from '../book/book-list/book-list.component';
import { BookShowComponent } from '../book/book-show/book-show.component';
import { MatchComponent } from '../match.component';
import { testMatcher } from './matcher/test.matcher';
import { BookAddComponent } from '../book/book-add/book-add.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
  {
    path: 'books',
    component: BookListComponent,
    children: [
      {
        path: 'book/:id',
        component: BookShowComponent,
      }
    ]
  },
  {
    path: 'book/:id',
    component: BookShowComponent,
  },
  {
    path: 'add',
    component: BookAddComponent,
  },
  {
    matcher: testMatcher,
    component: MatchComponent,
  }
];
