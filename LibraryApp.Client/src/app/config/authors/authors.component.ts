import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthorDialogComponent } from './author-dialog.component';

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html'
})

export class AuthorsComponent implements OnInit {
    constructor(
        private modalService: NgbModal
    ) { }

    ngOnInit() {

    }

    public openModal() {
        const modalRef = this.modalService.open(AuthorDialogComponent);
        modalRef.componentInstance.authorId = 1;

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

}