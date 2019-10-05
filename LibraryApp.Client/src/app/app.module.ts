import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { fakeBackendProvider } from '../_helpers/fake-backend';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookModule } from './books/book.module';
import { SharedModule } from './shared/shared.module';
import { AuthDialogComponent } from './auth/auth-dialog.component';
import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { MyBooksComponent } from './profile/my-books/my-books.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { PersonalInfoComponent } from './profile/personal-info/personal-info.component';
import { LoginUserGuard } from './shared/guards/login-user.guard';
import { AdminUserGuard } from './shared/guards/admin-user.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthDialogComponent,
    ProfileComponent,
    MyBooksComponent,
    SettingsComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'profile/:userId', component: ProfileComponent, canActivate: [LoginUserGuard],
        children: [
          { path: '', redirectTo: 'personal', pathMatch: 'full' },
          { path: 'personal', component: PersonalInfoComponent },
          { path: 'mybooks', component: MyBooksComponent },
          { path: 'settings', component: SettingsComponent },
          { path: '**', redirectTo: 'personal', pathMatch: 'full' }
        ]
      },
      { path: 'config', canActivate: [AdminUserGuard], loadChildren: './config/config.module#ConfigModule' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ], { scrollPositionRestoration: 'enabled', useHash: true }),
    BookModule,
    SharedModule
  ],
  providers: [
    fakeBackendProvider,
    AuthService,
    ProfileService,
    LoginUserGuard,
    AdminUserGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthDialogComponent
  ]

})
export class AppModule { }
