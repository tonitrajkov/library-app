import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUser } from '../shared/models/user';

@Injectable()
export class ProfileService {
    private apiUrl = environment.apiUrl;    

    constructor(private http: HttpClient) { }

    public updateUser(model: IUser,): Observable<any> {
        
        return this.http.put(`${this.apiUrl}/configuration/user`, model);
    }
}





