import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { IUser } from '../../shared/models/user';
import { IChangePassword } from '../../shared/models/change-password';

@Component({
    templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

    public user: IUser;
    public changePasswordModel: IChangePassword = {} as IChangePassword;
    public submitted: boolean = false;
    public errorMsg: string;
    public successChanges: boolean = false;

    constructor(private authService: AuthService) { }

    public ngOnInit(): void {
        this.user = this.authService.getLoggedUser();
    }

    public savePassword(isFormValid: boolean) {
        this.submitted = true;
        this.successChanges = false;
        if (isFormValid) {
            this.changePasswordModel.userId = this.user.id;
            this.authService.changePassword(this.changePasswordModel).subscribe(result => {
                if (result) {
                    this.submitted = false;
                    this.errorMsg = '';
                    this.successChanges = true;
                }
            }, error => {
                this.errorMsg = error;
            });
        }
    }
}
