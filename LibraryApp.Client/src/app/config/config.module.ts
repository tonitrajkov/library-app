import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from 'src/app/config/config.component';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ConfigComponent }
    ])
    ],
    declarations: [
        ConfigComponent
    ],
    exports: [

    ]
})
export class ConfigModule { }