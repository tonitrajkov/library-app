import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { fakeBackendProvider } from '../_helpers/fake-backend';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookModule } from './books/book.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'config', loadChildren: './config/config.module#ConfigModule' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    BookModule,
    SharedModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
