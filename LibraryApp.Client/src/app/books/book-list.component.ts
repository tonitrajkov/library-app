import { Component } from "@angular/core";

import { OnInit } from "@angular/core";
import { IBook } from "src/app/books/book";
import { BookService } from "src/app/books/book.service";

@Component({
templateUrl: './book-list.component.html',
styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
pageTitle: string = 'Book List';
imageWidth: number = 80;
imageMargin: number = 2;
showImage: boolean = true;
errorMessage: string;

_listFilter: string;
get listFilter(): string {
    return this._listFilter
}
set listFilter(value:string) {
    this._listFilter = value;
    this.filteredBooks = this._listFilter ? this.performFilter(this.listFilter) : this.books;
}

filteredBooks: IBook[];
books: IBook[] = [];

constructor(private bookService: BookService) {
    
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

ngOnInit(): void {
    this.bookService.getBooks().subscribe(
        books => {
            this.books = books,
            this.filteredBooks = this.books;
        },           
        error => this.errorMessage = <any>error
    );
}
}