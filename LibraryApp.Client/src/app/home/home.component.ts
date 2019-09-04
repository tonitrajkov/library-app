import { Component, OnInit } from '@angular/core';

import { IBook } from '../shared/models/book';
import { IAuthor } from '../shared/models/author';
import { BookService } from '../books/book.service';
@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public books: IBook[] = [];
  public filteredBooks: IBook[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadBooks();
  }


  private loadBooks() {
    this.bookService.loadBooks()
      .subscribe(books => {
        this.books = books;
        this.filteredBooks = this.books;
      });
  }

  private getAuthors(authors: IAuthor[]): string {

    if (authors === null || authors === undefined || authors.length === 0) {
      return '';
    }

    var authorsNames = authors.map(function (author) {
      return author.fullName;
    }).join(',');

    return authorsNames;

  }
}
