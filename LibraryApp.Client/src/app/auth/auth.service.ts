import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ILogin } from '../shared/models/login';
import { ISignup } from '../shared/models/signup';
import { IUser } from 'src/app/shared/models/user';
import { IChangePassword } from 'src/app/shared/models/change-password';

@Injectable()
export class AuthService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public login(model: ILogin): Observable<IUser> {
        return this.http.post<IUser>(`${this.apiUrl}/auth/login`, model);
    }

    public signup(model: ISignup): Observable<IUser> {
        return this.http.post<IUser>(`${this.apiUrl}/auth/signup`, model);
    }

    public changePassword(model: IChangePassword): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/auth/changepassword`, model);
    }

    public setLoggedUser(user: IUser) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
    }

    public getLoggedUser(): IUser {
        let localStorageItem = localStorage.getItem("loggedUser");
        if (localStorageItem) {
            return <IUser>JSON.parse(localStorageItem);
        }

        return null;
    }

    public logout() {
        localStorage.removeItem("loggedUser");
    }

    public isAdmin(): boolean {
        let user = this.getLoggedUser();
        if (user) {

            if (!user.roles || user.roles.length === 0) {
                return false;
            }
            let userRoles = user.roles.filter(role => {
                return role.tag === 'ADMIN';
            });
            if (userRoles.length === 0) {
                return false;
            }
            return true;
        }
        return false;
    }
}