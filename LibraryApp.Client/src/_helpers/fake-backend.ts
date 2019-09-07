import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError, generate } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


import { AUTHORS, GENRES, ROLES, USERS, BOOKS } from './mock.data';
import { IAuthor } from '../app/shared/models/author';
import { IGenre } from '../app/shared/models/genre';
import { IRole } from '../app/shared/models/role';
import { IUser } from '../app/shared/models/user';
import { IBook } from '../app/shared/models/book';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    public authors: IAuthor[] = AUTHORS;
    public genres: IGenre[] = GENRES;
    public roles: IRole[] = ROLES;
    public users: IUser[] = USERS;
    public books: IBook[] = BOOKS;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //return;
        return of(null).pipe(mergeMap(() => {

            // authors api
            if (request.url.indexOf('/api/configuration/author') !== -1) {
                let urlParts = request.url.split('/');
                let authorId = parseInt(urlParts[urlParts.length - 1]);

                switch (request.method) {
                    case 'GET':
                        if (authorId) {
                            // get author by Id
                            let author = this.getAuthorById(authorId, true);
                            return of(new HttpResponse({ status: 200, body: author }));
                        }
                        else {
                            // get all authors
                            return of(new HttpResponse({ status: 200, body: this.authors }));
                        }
                    case 'POST': // add new author
                        let newAuthor = <IAuthor>request.body;
                        newAuthor.id = this.generateId(this.authors.map(author => author.id));
                        this.authors.push(newAuthor);

                        return of(new HttpResponse({ status: 200 }));
                    case 'PUT':
                        let model = <IAuthor>request.body;
                        let author = this.getAuthorById(model.id, false);
                        if (author) {
                            author.firstName = model.firstName;
                            author.lastName = model.lastName;
                            author.biography = model.biography;
                            author.imageUrl = model.imageUrl;
                        }

                        return of(new HttpResponse({ status: 200 }));
                    case 'DELETE':
                        if (authorId) {
                            let author = this.getAuthorById(authorId, false);
                            if (author) {
                                let index = this.authors.indexOf(author, 0);
                                if (index !== -1) {
                                    this.authors.splice(index, 1);
                                }
                            }

                            return of(new HttpResponse({ status: 200 }));
                        }
                        break;
                }
            }

            // books api
            if (request.url.indexOf('/api/configuration/book') !== -1
                || request.url.indexOf('/api/book') !== -1) {
                let urlParts = request.url.split('/');
                let bookId = parseInt(urlParts[urlParts.length - 1]);

                switch (request.method) {
                    case 'GET':
                        if (bookId) {
                            // get book by Id
                            let book = this.getBookById(bookId, true);
                            return of(new HttpResponse({ status: 200, body: book }));
                        }
                        else {
                            // get all books
                            return of(new HttpResponse({ status: 200, body: this.books }));
                        }
                    case 'POST': // add new book
                        let newBook = <IBook>request.body;
                        newBook.id = this.generateId(this.books.map(book => book.id));
                        this.books.push(newBook);

                        return of(new HttpResponse({ status: 200 }));
                    case 'PUT':
                        let model = <IBook>request.body;
                        let book = this.getBookById(model.id, false);
                        if (book) {
                            book.title = model.title;
                            book.originalTitle = model.originalTitle;
                            book.authors = model.authors;
                            book.genres = model.genres;
                            book.publishingHouse = model.publishingHouse;
                            book.pagesNum = model.pagesNum;
                            book.rating = model.rating;
                            book.description = model.description;
                            book.imageUrl = model.imageUrl;
                        }

                        return of(new HttpResponse({ status: 200 }));
                    case 'DELETE':
                        if (bookId) {
                            let book = this.getBookById(bookId, false);
                            if (book) {
                                let index = this.books.indexOf(book, 0);
                                if (index !== -1) {
                                    this.books.splice(index, 1);
                                }
                            }

                            return of(new HttpResponse({ status: 200 }));
                        }
                        break;
                }
            }

            // genre api
            if (request.url.indexOf('/api/configuration/genre') !== -1) {
                let urlParts = request.url.split('/');
                let genreId = parseInt(urlParts[urlParts.length - 1]);

                switch (request.method) {
                    case 'GET':
                        if (genreId) {
                            // get genre by Id
                            let genre = this.getGenreById(genreId, true);
                            return of(new HttpResponse({ status: 200, body: genre }));
                        }
                        else {
                            // get all genres
                            return of(new HttpResponse({ status: 200, body: this.genres }));
                        }
                    case 'POST': // add new genre
                        let newGenre = <IGenre>request.body;
                        newGenre.id = this.generateId(this.genres.map(genre => genre.id));
                        this.genres.push(newGenre);

                        return of(new HttpResponse({ status: 200 }));
                    case 'PUT':
                        let model = <IGenre>request.body;
                        let genre = this.getGenreById(model.id, false);
                        if (genre) {
                            genre.title = model.title;
                        }

                        return of(new HttpResponse({ status: 200 }));
                    case 'DELETE':
                        if (genreId) {
                            let genre = this.getGenreById(genreId, false);
                            if (genre) {
                                let index = this.genres.indexOf(genre, 0);
                                if (index !== -1) {
                                    this.genres.splice(index, 1);
                                }
                            }

                            return of(new HttpResponse({ status: 200 }));
                        }
                        break;
                }
            }

            // role api
            if (request.url.indexOf('/api/configuration/role') !== -1) {
                let urlParts = request.url.split('/');
                let roleId = parseInt(urlParts[urlParts.length - 1]);

                switch (request.method) {
                    case 'GET':
                        if (roleId) {
                            // get role by Id
                            let role = this.getRoleById(roleId, true);
                            return of(new HttpResponse({ status: 200, body: role }));
                        }
                        else {
                            // get all roles
                            return of(new HttpResponse({ status: 200, body: this.roles }));
                        }
                    case 'POST': // add new role
                        let newRole = <IRole>request.body;
                        newRole.id = this.generateId(this.roles.map(role => role.id));
                        this.roles.push(newRole);

                        return of(new HttpResponse({ status: 200 }));
                    case 'PUT':
                        let model = <IRole>request.body;
                        let role = this.getRoleById(model.id, false);
                        if (role) {
                            role.title = model.title;
                            role.tag = model.tag;
                        }

                        return of(new HttpResponse({ status: 200 }));
                    case 'DELETE':
                        if (roleId) {
                            let role = this.getRoleById(roleId, false);
                            if (role) {
                                let index = this.roles.indexOf(role, 0);
                                if (index !== -1) {
                                    this.roles.splice(index, 1);
                                }
                            }

                            return of(new HttpResponse({ status: 200 }));
                        }
                        break;
                }
            }

            // user api
            if (request.url.indexOf('/api/configuration/user') !== -1) {
                let urlParts = request.url.split('/');
                let userId = parseInt(urlParts[urlParts.length - 1]);

                switch (request.method) {
                    case 'GET':
                        if (userId) {
                            // get user by Id
                            let user = this.getUserById(userId, true);
                            return of(new HttpResponse({ status: 200, body: user }));
                        }
                        else {
                            // get all users
                            return of(new HttpResponse({ status: 200, body: this.users }));
                        }
                    case 'POST': // add new user
                        let newUser = <IUser>request.body;
                        newUser.id = this.generateId(this.users.map(user => user.id));
                        this.users.push(newUser);

                        return of(new HttpResponse({ status: 200 }));
                    case 'PUT':
                        let model = <IUser>request.body;
                        let user = this.getUserById(model.id, false);
                        if (user) {
                            user.firstName = model.firstName;
                            user.lastName = model.lastName;
                            user.email = model.email;
                            user.userName = model.userName;
                            user.imageUrl = model.imageUrl;
                            user.isActive = model.isActive;
                            user.roles = model.roles;
                        }

                        return of(new HttpResponse({ status: 200 }));
                    case 'DELETE':
                        if (userId) {
                            let user = this.getUserById(userId, false);
                            if (user) {
                                let index = this.users.indexOf(user, 0);
                                if (index !== -1) {
                                    this.users.splice(index, 1);
                                }
                            }

                            return of(new HttpResponse({ status: 200 }));
                        }
                        break;
                }
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))

            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }

    // get by id functions
    public getAuthorById(authorId: number, makeCopy: boolean): IAuthor {
        let author = this.authors.filter(author => { return author.id === authorId; })[0];

        if (!author) {
            return {} as IAuthor;
        }

        return makeCopy ? this.copyObject<IAuthor>(author) : author;
    }

    public getBookById(bookId: number, makeCopy: boolean): IBook {
        let book = this.books.filter(book => { return book.id === bookId; })[0];

        if (!book) {
            return {} as IBook;
        }

        return makeCopy ? this.copyObject<IBook>(book) : book;
    }

    public getGenreById(genreId: number, makeCopy: boolean): IGenre {
        let genre = this.genres.filter(genre => { return genre.id === genreId; })[0];

        if (!genre) {
            return {} as IGenre;
        }

        return makeCopy ? this.copyObject<IGenre>(genre) : genre;
    }

    public getRoleById(roleId: number, makeCopy: boolean): IRole {
        let role = this.roles.filter(role => { return role.id === roleId; })[0];

        if (!role) {
            return {} as IRole;
        }

        return makeCopy ? this.copyObject<IRole>(role) : role;
    }

    public getUserById(userId: number, makeCopy: boolean): IUser {
        let user = this.users.filter(user => { return user.id === userId; })[0];

        if (!user) {
            return {} as IUser;
        }

        return makeCopy ? this.copyObject<IUser>(user) : user;
    }

    // private functions
    private generateId(ids: number[]): number {
        let maxId = 0;
        ids.forEach(id => {
            if (id > maxId) {
                maxId = id;
            }
        });

        return maxId + 1;
    }

    private copyObject<T>(object: T): T {
        return <T>JSON.parse(JSON.stringify(object));
    }

}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
