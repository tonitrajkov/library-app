import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// modules
import { BookModule } from './books/book.module';
import { SharedModule } from 'src/app/shared/shared.module';
// components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './books/welcome.component';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
