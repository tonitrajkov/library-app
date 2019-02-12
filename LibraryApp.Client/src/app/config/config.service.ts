import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { throwError } from "rxjs/internal/observable/throwError";

import { environment } from '../../environments/environment';
import { IAuthor } from '../shared/models/author';


@Injectable()
export class ConfigService {
    private apiUrl = 'http://libraryapp/api';

    constructor(private http: HttpClient) { }

    addAuthor(model: IAuthor): Observable<any> {
        return this.http.post(`${this.apiUrl}/configuration/author`, model );
    }
}