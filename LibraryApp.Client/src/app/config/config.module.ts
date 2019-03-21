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

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: ConfigComponent,
                children: [
                    { path: '', redirectTo: 'authors' },
                    { path: 'authors', component: AuthorsComponent },
                    { path: 'genres', component: GenresComponent },
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
        GenreModalComponent
    ],
    providers: [
        ConfigService
    ],
    exports: [

    ],
    entryComponents: [
        AuthorModalComponent,
        GenreModalComponent
    ]
})
export class ConfigModule { }