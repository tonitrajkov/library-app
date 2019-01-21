import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { StarComponent } from './components/star.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    StarComponent,

  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
