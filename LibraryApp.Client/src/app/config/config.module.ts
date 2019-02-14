import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../shared/shared.module';

// services
import { ConfigService } from './config.service';

// components
import { ConfigComponent } from 'src/app/config/config.component';
import { AuthorsComponent } from 'src/app/config/authors/authors.component';
import { AuthorModalComponent } from './authors/author-modal.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: ConfigComponent,
                children: [
                    { path: '', redirectTo: 'authors' },
                    { path: 'authors', component: AuthorsComponent },
                    { path: '**', redirectTo: 'authors' }
                ]
            }
        ]),
        SharedModule
    ],
    declarations: [
        ConfigComponent,
        AuthorsComponent,
        AuthorModalComponent
    ],
    providers: [
        ConfigService
    ],
    exports: [

    ],
    entryComponents: [
        AuthorModalComponent
    ]
})
export class ConfigModule { }