import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../shared/shared.module';

// services
import { ConfigService } from './config.service';

// components
import { ConfigComponent } from 'src/app/config/config.component';
import { AuthorsComponent } from 'src/app/config/authors/authors.component';
import { AuthorDialogComponent } from './authors/author-dialog.component';

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
        AuthorDialogComponent
    ],
    providers: [
        ConfigService
    ],
    exports: [

    ],
    entryComponents: [
        AuthorDialogComponent
    ]
})
export class ConfigModule { }