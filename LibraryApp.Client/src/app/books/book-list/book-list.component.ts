import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { IBook } from "../../shared/models/book";
import { BookService } from "../book.service";

@Component({
    templateUrl: './book-list.component.html'
})

export class BookListComponent implements OnInit {
    pageTitle: string = 'Book List';
    imageWidth: number = 80;
    imageMargin: number = 2;
    showImage: boolean = true;
    errorMessage: string;
    filteredBooks: IBook[];
    books: IBook[] = [];

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredBooks = this._listFilter ? this.performFilter(this.listFilter) : this.books;
    }

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.loadBooks();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Library: ' + message;
    }

    performFilter(filterBy: string): IBook[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.books.filter((book: IBook) =>
            book.originalTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    loadBooks() {
        this.bookService.loadBooks()
            .subscribe(books => {
                this.books = books;
                this.filteredBooks = this.books;
            });
    }
}