import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { throwError } from "rxjs/internal/observable/throwError";

import { environment } from '../../environments/environment';
import { IAuthor } from '../shared/models/author';
import { IGenre } from '../shared/models/genre';
import { IRole } from "../shared/models/role";
import { IUser } from '../shared/models/user';


@Injectable()
export class ConfigService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public addAuthor(model: IAuthor, imageFile: any): Observable<any> {
        let formData = new FormData();
        formData.append('model', JSON.stringify(model));
        formData.append('file', imageFile);

        return this.http.post(`${this.apiUrl}/configuration/author`, formData);
    }

    public loadAuthors(): Observable<IAuthor[]> {
        return this.http.get<IAuthor[]>(`${this.apiUrl}/configuration/author`);
    }

    public deleteAuthor(authorId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/configuration/author/` + authorId);
    }

    public updateAuthor(model: IAuthor): Observable<any> {
        return this.http.put(`${this.apiUrl}/configuration/author`, model);
    }

    public getAuthorById(authorId: number): Observable<IAuthor> {
        return this.http.get<IAuthor>(`${this.apiUrl}/configuration/author/` + authorId);
    }

    public addGenre(model: IGenre): Observable<any> {
        return this.http.post(`${this.apiUrl}/configuration/genre`, model);
    }

    public loadGenres(): Observable<IGenre[]> {
        return this.http.get<IGenre[]>(`${this.apiUrl}/configuration/genre`);
    }

    public deleteGenre(genreId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/configuration/genre/` + genreId);
    }

    public updateGenre(model: IGenre): Observable<any> {
        return this.http.put(`${this.apiUrl}/configuration/genre`, model);
    }

    public getGenreById(genreId: number): Observable<IGenre> {
        return this.http.get<IGenre>(`${this.apiUrl}/configuration/genre/` + genreId);
    }

    public addRole(model: IRole): Observable<any> {
        return this.http.post(`${this.apiUrl}/configuration/role`, model);
    }

    public loadRoles(): Observable<IRole[]> {
        return this.http.get<IRole[]>(`${this.apiUrl}/configuration/role`);
    }

    public deleteRole(roleId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/configuration/role/` + roleId);
    }

    public updateRole(model: IRole): Observable<any> {
        return this.http.put(`${this.apiUrl}/configuration/role`, model);
    }
    public getRoleById(roleId: number): Observable<IRole> {
        return this.http.get<IRole>(`${this.apiUrl}/configuration/role/` + roleId);
    }


    public addUser(model: IUser, imageFile: any): Observable<any> {
        let formData = new FormData();
        formData.append('model', JSON.stringify(model));
        formData.append('file', imageFile);

        return this.http.post(`${this.apiUrl}/configuration/user`, formData);
    }

    public loadUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${this.apiUrl}/configuration/user`);
    }

    public deleteUser(userId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/configuration/user/` + userId);
    }

    public updateUser(model: IUser): Observable<any> {
        return this.http.put(`${this.apiUrl}/configuration/user`, model);
    }
    public getUserById(userId: number): Observable<IUser> {
        return this.http.get<IUser>(`${this.apiUrl}/configuration/user/` + userId);
    }

}