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
  book: IBook

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.bookService.getBooks()
      .subscribe(books => {
        this.book = books.filter((book: IBook) =>
          book.bookId == parseInt(id))[0];
      });
  }

  onBack(): void {
    this.router.navigate(['/books']);
  }
}
