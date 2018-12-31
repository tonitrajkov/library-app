import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { BookService } from "src/app/books/book.service";
import { IBook } from 'src/app/books/book';

@Component({
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  pageTitle: string = 'Book Detail';
  book: IBook;
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    // this.bookService.getBooks()
    //   .subscribe(books => {
    //     this.book = books.filter((book: IBook) =>
    //       book.id == parseInt(id))[0];
    //   });

    this.getBook(id);
  }

  getBook(bookId) {
    this.bookService.getBook(bookId)
      .subscribe(book => {
        this.book = book;
      });
  }

  onBack(): void {
    this.router.navigate(['/books']);
  }

  editBook(): void {
    this.isEditing = true;
  }

  saveBook(): void {
    this.isEditing = false;
  }
}
