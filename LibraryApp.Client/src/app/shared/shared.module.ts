import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { StarComponent } from './components/star.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    NgbTabsetModule
  ],
  declarations: [
    StarComponent,

  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    NgbModule,
    NgbTabsetModule
  ]
})
export class SharedModule { }
