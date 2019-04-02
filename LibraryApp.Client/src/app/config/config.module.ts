import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: ConfigComponent,
                children: [
                    { path: '', redirectTo: 'authors' },
                    { path: 'authors', component: AuthorsComponent },
                    { path: 'genres', component: GenresComponent },
                    { path: 'roles', component: RolesComponent },
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
    ]
})
export class ConfigModule { }