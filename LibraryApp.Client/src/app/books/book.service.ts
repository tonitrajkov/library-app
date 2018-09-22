import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IBook } from "src/app/books/book";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    //ovde Kurata napravi constructor i stavi url na fajl kaj so i bea vmetnati site proizvodi, vo mojov slucaj knigi
    //jas nemam takov fajl i zatoa ne go napraviv toa povrzuvanje so http, pa ako moze da mi pomognes :D

    getBooks(): IBook[] {
        return [
            {
                "bookId": 1,
                "originalTitle": "The Nightingale",
                "author": "Kristin Hannah",
                "genre": "drama",
                "publishingHouse": "Sakam Knigi",
                "pages": 415,
                "starRating": 4.56,
                "imageUrl": "http://sakamknigi.mk/wp-content/uploads/2015/09/11.jpg"
            },
            {
                "bookId": 2,
                "originalTitle": "Never Knowing",
                "author": "Chevy Stevens",
                "genre": "mistery",
                "publishingHouse": "Sakam Knigi",
                "pages": 367,
                "starRating": 3.86,
                "imageUrl": "http://www.kniga.mk/media/catalog/product/cache/3/image/265x265/17f82f742ffe127f42dca9de82fb58b1/n/i/nikogas_ne_se_znae.jpg"
            },
            {
                "bookId": 3,
                "originalTitle": "And The Mountains Echoed",
                "author": "Khaled Hosseini",
                "genre": "fiction",
                "publishingHouse": "Matica",
                "pages": 393,
                "starRating": 4.04,
                "imageUrl": "http://sakamknigi.mk/portal/media/k2/items/cache/a4e782ff58c2efaa0c9218e717493fa6_S.jpg?t=-62169984000"
            }
        ];
    }
}