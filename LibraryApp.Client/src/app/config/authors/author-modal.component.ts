import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfigService } from '../config.service';
import { IAuthor } from '../../shared/models/author';

@Component({
    templateUrl: './author-modal.component.html',
})
export class AuthorModalComponent implements OnInit {

    @Input() public authorId: number | undefined;
    public modalTitle: string = 'Внесување на автор';
    public author: IAuthor = {} as IAuthor;

    constructor(
        private activateModal: NgbActiveModal,
        private configService: ConfigService
    ) { }

    ngOnInit(): void {
        if (this.authorId !== undefined) {
            this.modalTitle = 'Промена на автор';
            this.getAuthorById();
        }
    }

    public getAuthorById() {
        this.configService.getAuthorById(this.authorId)
            .subscribe(result => {
                this.author = result;
            });
    }

    public confirmAction() {

        if (this.authorId !== undefined) {
            this.configService.updateAuthor(this.author)
                .subscribe(result => {
                    this.activateModal.close(true);
                });
        }
        else {
            this.configService.addAuthor(this.author)
                .subscribe(result => {
                    this.activateModal.close(true);
                });
        }
    }

    public cancelAction() {
        this.activateModal.close(false);
    }
}
