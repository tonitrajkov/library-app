import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BookModalComponent } from './book-modal.component';
import { ConfigService } from '../config.service';
import { IBook } from '../../shared/models/book';
import { WarningDialogComponent } from 'src/app/shared/dialogs/warning-dialog.component';

@Component({
    templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
    public books: IBook[];

    constructor(
        private modalService: NgbModal,
        private configService: ConfigService,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.loadBooks();
    }

    public deleteBook(book: IBook) {
        const modalRef = this.modalService.open(WarningDialogComponent, { size: 'sm' });

        modalRef.result.then((result) => {
            if (result == true) {
                this.configService.deleteBook(book.id)
                    .subscribe(result => {
                        if (result) {
                            this.loadBooks();
                        }
                    });
            }
        });
    }

    public updateBook(user: IBook) {
        this.openBookModal(user.id);
    }

    public addBook() {
        this.openBookModal(undefined);

    }

    public loadBooks() {
        this.configService.loadBooks()
            .subscribe(result => {
                this.books = result;
            });
    }

    public openBookModal(bookId: number | undefined) {
        const modalRef = this.modalService.open(BookModalComponent);
        modalRef.componentInstance.bookId = bookId;

        modalRef.result.then((result) => {
            if (result == true) {
                this.loadBooks();
            }
        });
    }

    public getBookImage(imageString: any) {
        if (imageString) {
            return imageString;
        }
        return "./assets/images/no-avatar.png"
    }

}
