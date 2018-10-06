import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IBook } from "src/app/books/book";
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { throwError } from "rxjs/internal/observable/throwError";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private bookUrl = 'api/books/books.json';
    constructor(private http: HttpClient) {}

    getBooks(): Observable<IBook[]> {
        return this.http.get<IBook[]>(this.bookUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } 
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}