import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfigService } from '../config.service';
import { IAuthor } from '../../shared/models/author';

@Component({
    templateUrl: './author-dialog.component.html'
})

export class AuthorDialogComponent implements OnInit {

    @Input() public authorId: number | undefined;
    public author: IAuthor = {} as IAuthor;

    public modalTitle: string = 'Внес на нов автор';

    constructor(
        private activeModal: NgbActiveModal,
        private configService: ConfigService
    ) { }

    ngOnInit() {
        if (this.authorId) {
            this.modalTitle = 'Промена на автор';
        }
    }

    closeModal() {
        this.activeModal.dismiss(false);
    }

    submitModal() {
        this.configService.addAuthor(this.author)
            .subscribe(result => {
                if (result) {
                    this.activeModal.dismiss(true);
                }
            });
    }
}