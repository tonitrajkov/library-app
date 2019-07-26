import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IBook } from '../../shared/models/book';
import { BookService } from "../book.service";

@Component({
  templateUrl: './book-detail.component.html'
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
