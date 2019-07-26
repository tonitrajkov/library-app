import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// modules
import { SharedModule } from '../shared/shared.module';

// services
import { ConfigService } from './config.service';

// components
import { ConfigComponent } from './config.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorModalComponent } from './authors/author-modal.component';
import { GenresComponent } from './genres/genres.component';
import { GenreModalComponent } from './genres/genre-modal.component';
import { RolesComponent } from './roles/roles.component';
import { RoleModalComponent } from './roles/role-modal.component';
import { UsersComponent } from './users/users.component';
import { UserModalComponent } from './users/user-modal.component';
import { BooksComponent } from './books/books.component';
import { BookModalComponent } from './books/book-modal.component';

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild([
            {
                path: '', component: ConfigComponent,
                children: [
                    { path: '', redirectTo: 'authors' },
                    { path: 'authors', component: AuthorsComponent },
                    { path: 'genres', component: GenresComponent },
                    { path: 'roles', component: RolesComponent },
                    { path: 'books', component: BooksComponent },
                    { path: 'users', component: UsersComponent },
                    { path: '**', redirectTo: 'authors' }
                ]
            }
        ]),
        SharedModule
    ],
    declarations: [
        ConfigComponent,
        AuthorsComponent,
        AuthorModalComponent,
        GenresComponent,
        GenreModalComponent,
        RolesComponent,
        RoleModalComponent,
        UsersComponent,
        UserModalComponent,
        BooksComponent,
        BookModalComponent
    ],
    providers: [
        ConfigService
    ],
    exports: [

    ],
    entryComponents: [
        AuthorModalComponent,
        GenreModalComponent,
        RoleModalComponent,
        UserModalComponent,
        BookModalComponent
    ]
})
export class ConfigModule { }