import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTabsetModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';

// components
import { StarComponent } from './components/star.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    NgbTabsetModule,
    NgbModalModule,
    NgSelectModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    StarComponent,
    HeaderComponent,
    FooterComponent

  ],
  exports: [
    StarComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    NgbModule,
    NgbTabsetModule,
    NgbModalModule,
    NgSelectModule
  ]
})
export class SharedModule { }
