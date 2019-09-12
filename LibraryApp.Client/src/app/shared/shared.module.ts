import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// modules
import { NgbModule, NgbTabsetModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// components
import { StarComponent } from './components/star.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WarningDialogComponent } from '../shared/dialogs/warning-dialog.component';
import { PubSubService } from './pubsub.service';

library.add(fas);

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    NgbTabsetModule,
    NgbModalModule,
    NgSelectModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [
    StarComponent,
    HeaderComponent,
    FooterComponent,
    WarningDialogComponent

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
    NgSelectModule,
    FontAwesomeModule,
    WarningDialogComponent
  ],
  entryComponents: [
    WarningDialogComponent
  ],
  providers: [
    PubSubService
  ]
})
export class SharedModule { }
