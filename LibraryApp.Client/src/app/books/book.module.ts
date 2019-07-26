import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../shared/shared.module';

// services
import { BookDetailGuard } from './book-detail/book-detail.guard';

// components
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'books', component: BookListComponent },
      { 
        path: 'books/:id',
        canActivate: [ BookDetailGuard ],
        component: BookDetailComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent
    ]
})
export class BookModule { }
