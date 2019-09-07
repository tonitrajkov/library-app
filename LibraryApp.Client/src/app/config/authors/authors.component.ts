import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthorModalComponent } from './author-modal.component';
import { ConfigService } from '../config.service';
import { IAuthor } from '../../shared/models/author';
import { WarningDialogComponent } from '../../shared/dialogs/warning-dialog.component';

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html'
})

export class AuthorsComponent implements OnInit {
    public authors: IAuthor[];

    constructor(
        private modalService: NgbModal,
        private configService: ConfigService,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.loadAuthors();
    }

    public deleteAuthor(author: IAuthor) {
        const modalRef = this.modalService.open(WarningDialogComponent, { size: 'sm' });

        modalRef.result.then((result) => {
            if (result == true) {
                this.configService.deleteAuthor(author.id)
                .subscribe(result => {
                    if (result) {
                        this.loadAuthors();
                    }
                });
            }
        });
        
    }

    public updateAuthor(author: IAuthor) {
        this.openAuthorModal(author.id);
    }

    public addAuthor() {
        this.openAuthorModal(undefined);
    }

    public loadAuthors() {
        this.configService.loadAuthors()
            .subscribe(result => {
                this.authors = result;
            });
    }

    public openAuthorModal(authorId: number | undefined) {
        const modalRef = this.modalService.open(AuthorModalComponent);
        modalRef.componentInstance.authorId = authorId;

        modalRef.result.then((result) => {
            if (result == true) {
                this.loadAuthors();
            }
        });
    }

    public getAuthorImage(imageString: any) {
        if(imageString) {
            return imageString;
        }
        return "./assets/images/no-avatar.png"
    }

}