import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfigService } from '../config.service';
import { IBook } from '../../shared/models/book';
import { IRole } from '../../shared/models/role';
import { IAuthor } from '../../shared/models/author';
import { IGenre } from '../../shared/models/genre';

@Component({
    templateUrl: './book-modal.component.html',
})
export class BookModalComponent implements OnInit {
    
    @Input() public bookId: number | undefined;
    public submitted = false;    
    public modalTitle: string = 'Внесување на книга';
    public book: IBook = {} as IBook;
    public imageFile: any;
    public bookImgPreview: any;
    public author: IAuthor[];
    public genre: IGenre[];

    constructor(
        private activateModal: NgbActiveModal,
        private configService: ConfigService
    ) { }

    ngOnInit(): void {
        this.loadAllAuthors();
        this.loadAllGenres();
        
        if (this.bookId !== undefined) {
            this.modalTitle = 'Промена на книга';
            this.getBookById();
        }
    }

    public getBookById() {
        this.configService.getBookById(this.bookId)
            .subscribe(result => {
                this.book = result;
                this.bookImgPreview = !!this.book.imageUrl ? 'data:image/jpg;base64,' + this.book.imageUrl : '';
            });
    }

    public loadAllAuthors() {
        this.configService.loadAuthors()
            .subscribe(result => {
                this.author = result;
            });
    }

    public loadAllGenres() {
        this.configService.loadGenres()
            .subscribe(result => {
                this.genre = result;
            });
    }
    
    public confirmAction(isFormValid: boolean) {
        this.submitted = true;

        if (isFormValid === true) {
            if (this.bookId !== undefined) {
                this.configService.updateBook(this.book, this.imageFile)
                    .subscribe(result => {
                        this.activateModal.close(true);
                    });
            }
            else {
                this.configService.addBook(this.book, this.imageFile)
                    .subscribe(result => {
                        this.activateModal.close(true);
                    });
            }
        }
    }

    public cancelAction() {
        this.activateModal.close(false);
    }

    public onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            this.imageFile = event.target.files[0];
            reader.readAsDataURL(this.imageFile);
            reader.onload = () => {
                this.bookImgPreview = reader.result;
            };
        }
    }
}
