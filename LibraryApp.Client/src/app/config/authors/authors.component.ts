import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthorDialogComponent } from './author-dialog.component';
import { ConfigService } from '../config.service';
import { IAuthor } from 'src/app/shared/models/author';

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html'
})

export class AuthorsComponent implements OnInit {
    public authors: IAuthor[];

    constructor(
        private modalService: NgbModal,
        private configService: ConfigService
    ) { }

    ngOnInit() {
        this.loadAuthors();
    }

    public deleteAuthor(author: IAuthor) {
        this.configService.deleteAuthor(author.id)
        .subscribe(result => {
            if(result) {
                this.loadAuthors();
            }
        })
    }

    public updateAuthor(author: IAuthor) {

    }
    public loadAuthors() {
        this.configService.loadAuthors()
        .subscribe(result => {
            this.authors = result;
        });
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