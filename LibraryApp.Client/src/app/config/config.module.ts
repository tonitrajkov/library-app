import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../shared/shared.module';

// services

// components
import { ConfigComponent } from 'src/app/config/config.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ConfigComponent }
        ]),
        SharedModule
    ],
    declarations: [
        ConfigComponent
    ],
    exports: [

    ]
})
export class ConfigModule { }