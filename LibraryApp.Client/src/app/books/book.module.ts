import { NgModule } from '@angular/core';
import { BookListComponent } from 'src/app/books/book-list.component';
import { BookDetailComponent } from 'src/app/books/book-detail.component';
import { RouterModule } from '@angular/router';
import { BookDetailGuard } from 'src/app/books/book-detail.guard';
import { SharedModule } from '../shared/shared.module';

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
