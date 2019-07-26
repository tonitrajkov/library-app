import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BookModalComponent } from './book-modal.component';
import { ConfigService } from '../config.service';
import { IBook } from '../../shared/models/book';

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
        this.configService.deleteBook(book.id)
            .subscribe(result => {
                if (result) {
                    this.loadBooks();
                }
            })
    }

    public updateBook(book: IBook) {
        this.openBookModal(book.id);
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
        if(!!imageString){
            return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + imageString);
        }
    }

}
