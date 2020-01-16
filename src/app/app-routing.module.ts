import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlMatchResult, UrlSegment } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookShowComponent } from './book/book-show/book-show.component';
import { MatchComponent } from './match.component';

const routes: Routes = [
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
    matcher: (segments, group, route) => {
      const check = segments[0] && segments[0].path === 'test';

      if (!check) {
        return null;
      }

      const params: {
        [name: string]: UrlSegment
      } = {};

      for (let i = 1; i < segments.length; i += 2) {
        params[segments[i].path] = segments[i + 1] || new UrlSegment('', {});
      }

      const response: UrlMatchResult = {
        consumed: segments,
        posParams: params,
      };

      return response;
    },
    component: MatchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
