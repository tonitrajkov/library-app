import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTabsetModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { StarComponent } from './components/star.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    NgbTabsetModule,
    NgbModalModule
  ],
  declarations: [
    StarComponent,

  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    NgbModule,
    NgbTabsetModule,
    NgbModalModule
  ]
})
export class SharedModule { }
