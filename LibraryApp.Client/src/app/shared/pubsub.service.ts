import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUser } from './models/user';

@Injectable()
export class PubSubService {
    private subject = new Subject<any>();

    public setUser(user: IUser) {
        this.subject.next({ user });
    }

    public clearUser() {
        this.subject.next();
    }

    public getUser(): Observable<any> {
        return this.subject.asObservable();
    }
}