import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../shared/shared.module';

// services

// components
import { ConfigComponent } from 'src/app/config/config.component';
import { AuthorsComponent } from 'src/app/config/authors/authors.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ConfigComponent, 
            children: [
                { path: 'authors', component: AuthorsComponent }
            ]  
        }
        ]),
        SharedModule
    ],
    declarations: [
        ConfigComponent,
        AuthorsComponent
    ],
    exports: [

    ]
})
export class ConfigModule { }