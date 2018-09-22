import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/books/book';
import { Router } from '@angular/router';

@Component({
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  pageTitle: string = 'Book Detail';
  book: IBook

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.book = {
      'bookId': id,
      'originalTitle': 'The Nightingale',
      'author': 'Kristin Hannah',
      'genre': 'drama',
      'publishingHouse': 'Sakam Knigi',
      'pages': 415,
      'starRating': 4.56,
      'imageUrl': 'http://sakamknigi.mk/wp-content/uploads/2015/09/11.jpg'
    }
  }

  onBack(): void {
    this.router.navigate(['/books']);
  }

}
