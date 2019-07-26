import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { fakeBackendProvider } from '../_helpers/fake-backend';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './books/welcome.component';
import { BookModule } from './books/book.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
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
