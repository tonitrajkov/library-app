import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { IUser } from '../../shared/models/user';
import { AuthService } from '../../auth/auth.service';
import { ProfileService } from '../profile.service';
import { PubSubService } from '../../shared/pubsub.service';

@Component({
    templateUrl: './personal-info.component.html',
})
export class PersonalInfoComponent implements OnInit {
    public user: IUser = {} as IUser;
    public submitted: boolean = false;
    private subject = new Subject<any>();

    constructor(private authService: AuthService,
    private profileService: ProfileService,
private pubsubService: PubSubService) { }

    public ngOnInit(): void {
        this.user = this.authService.getLoggedUser();
    }

    public saveChanges(isFormValid: boolean) {
        this.submitted = true;
        if(isFormValid) {
            this.profileService.updateUser(this.user).subscribe(result => {
                this.authService.setLoggedUser(this.user);
                this.submitted = false;
                this.pubsubService.setUser(this.user);
            });
        }
    }
}
