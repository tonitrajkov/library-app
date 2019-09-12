import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthDialogComponent } from '../../../auth/auth-dialog.component';
import { AuthService } from '../../../auth/auth.service';
import { IUser } from '../../models/user';
import { PubSubService } from '../../pubsub.service';


@Component({
    selector: 'library-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

    public userIsLogged: boolean = false;
    public currentUser: IUser = {} as IUser;
    public isAdmin: boolean = false;
    private subscription: Subscription;

    constructor(private modalService: NgbModal,
        private authService: AuthService,
        private pubsubService: PubSubService,
        private router: Router
    ) {
        this.subscription = this.pubsubService.getUser().subscribe(user => {
            if (user) {
                this.currentUser = user.user;
                this.isAdmin = this.authService.isAdmin();
            }
        });
    }

    public ngOnInit(): void {
        this.currentUser = this.authService.getLoggedUser();
        if (this.currentUser) {
            this.userIsLogged = true;
        }

        this.isAdmin = this.authService.isAdmin();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public openAuthDialog(isLogin: boolean) {
        const modalRef = this.modalService.open(AuthDialogComponent);
        modalRef.componentInstance.isLogin = isLogin;

        modalRef.result.then((result) => {
            if (result) {
                this.currentUser = this.authService.getLoggedUser();
                if (this.currentUser) {
                    this.userIsLogged = true;
                }
            }
        });
    }

    public logout() {
        this.authService.logout();
        this.userIsLogged = false;
        this.currentUser = {} as IUser;
        this.isAdmin = false;
        this.router.navigate(['/home']);
    }

    public getUserImage(imageString: any) {
        if (imageString) {
            return imageString;
        }
        return "./assets/images/no-avatar.png"
    }
}
