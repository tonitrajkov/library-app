import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { ILogin } from '../shared/models/login';
import { ISignup } from '../shared/models/signup';
import { AuthService } from './auth.service';
import { PubSubService } from '../shared/pubsub.service';

@Component({
    templateUrl: './auth-dialog.component.html',
})
export class AuthDialogComponent implements OnInit {

    @Input() public isLogin: boolean;
    public submitBtnTitle: string;
    public dialogTitle: string;

    // login from
    public submittedLogin: boolean = false;
    public loginModel: ILogin = {} as ILogin;
    public loginFormErrorMsg: string = '';
    @ViewChild('lf') loginForm: any;

    // signup from
    public submittedSignup: boolean = false;
    public signupModel: ISignup = {} as ISignup;
    public signupFormErrorMsg: string = '';
    @ViewChild('su') signupForm: any;

    constructor(private authService: AuthService,
        private activateModal: NgbActiveModal,
        private pubsubService: PubSubService) { }

    public ngOnInit(): void {
        if (this.isLogin) {
            this.submitBtnTitle = "Најави се";
            this.dialogTitle = "Најава на корисник";
        }
        else {
            this.submitBtnTitle = "Креирај профил";
            this.dialogTitle = "Креирање на нов корисник";
        }
    }

    public beforeTabChange($event: NgbTabChangeEvent) {
        if ($event.nextId === 'login-tab') {
            this.submitBtnTitle = "Најави се";
            this.dialogTitle = "Најава на корисник";
            this.isLogin = true;
        }
        else {
            this.submitBtnTitle = "Креирај профил";
            this.dialogTitle = "Креирање на нов корисник";
            this.isLogin = false;
        }
    }

    public confirmAction() {
        if (this.isLogin) {
            this.submittedLogin = true;
            this.loginFormErrorMsg = '';
            if (this.loginForm.valid) {
                this.authService.login(this.loginModel)
                    .subscribe(user => {
                        this.authService.setLoggedUser(user);
                        this.pubsubService.setUser(user);
                        this.activateModal.close(true);
                    }, error => {
                        this.loginFormErrorMsg = error;
                    });
            }
        }
        else {
            this.submittedSignup = true;
            this.signupFormErrorMsg = '';
            if (this.signupForm.valid) {
                this.authService.signup(this.signupModel)
                    .subscribe(user => {
                        this.authService.setLoggedUser(user);
                        this.activateModal.close(true);
                    }, error => {
                        this.signupFormErrorMsg = error;
                    });
            }
        }
    }

    public cancelAction() {
        this.activateModal.close(false);
    }
}

