import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from 'src/app/books/book-list.component';
import { StarComponent } from './shared/star.component';
import { BookDetailComponent } from './books/book-detail.component';
import { WelcomeComponent } from './books/welcome.component';
import { BookDetailGuard } from 'src/app/books/book-detail.guard';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    StarComponent,
    BookDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'books', component: BookListComponent },
      { path: 'books/:id',
      canActivate: [ BookDetailGuard ],
       component: BookDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
