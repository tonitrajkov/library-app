import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    templateUrl: './warning-dialog.component.html',
})
export class WarningDialogComponent implements OnInit {
    constructor( private activateModal: NgbActiveModal ) { }

    ngOnInit(): void { }

    public confirmAction() {
        this.activateModal.close(true)
    }

    public cancelAction() {
        this.activateModal.close(false);
    }
}
