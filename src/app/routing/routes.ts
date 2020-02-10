import { Routes } from '@angular/router';
import { BookListComponent } from '../book/book-list/book-list.component';
import { BookShowComponent } from '../book/book-show/book-show.component';
import { MatchComponent } from '../match.component';
import { testMatcher } from './matcher/test.matcher';
import { BookAddComponent } from '../book/book-add/book-add.component';
import { BookEditComponent } from '../book/book-edit/book-edit.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
  {
    path: 'books',
    component: BookListComponent,
    data: {
      animation: 'BookList'
    },
    children: [
      {
        path: 'book/:id',
        component: BookEditComponent,
      }
    ]
  },
  {
    path: 'book/:id',
    component: BookShowComponent,
    data: {
      animation: 'BookItem'
    },
  },
  {
    path: 'add',
    component: BookAddComponent,
    data: {
      animation: 'BookShow'
    },
  },
  {
    matcher: testMatcher,
    component: MatchComponent,
    data: {
      animation: 'Matcher'
    },
  }
];
