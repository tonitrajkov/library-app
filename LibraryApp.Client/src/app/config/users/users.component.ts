import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from '../../shared/models/user';
import { ConfigService } from '../config.service';
import { UserModalComponent } from './user-modal.component';
import { WarningDialogComponent } from '../../shared/dialogs/warning-dialog.component';

@Component({
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
    public users: IUser[];
    
    constructor(
        private configService: ConfigService,
        private modalService: NgbModal,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void {   
         this.loadUsers();
    }
    public deleteUser(user: IUser) {
        const modalRef = this.modalService.open(WarningDialogComponent, { size: 'sm' });
        
                modalRef.result.then((result) => {
                    if (result == true) {
                        this.configService.deleteUser(user.id)
                        .subscribe(result => {
                            if (result) {
                                this.loadUsers();
                            }
                        });
                    }
                });
    }

    public updateUser(user: IUser) {
        this.openUserModal(user.id);
    }

    public addUser() {
        this.openUserModal(undefined);

    }

    public loadUsers() {
        this.configService.loadUsers()
        .subscribe(result => {
           this.users = result; 
        });
    }

    public openUserModal(userId: number | undefined) {
        const modalRef = this.modalService.open(UserModalComponent);
        modalRef.componentInstance.userId = userId;

        modalRef.result.then((result) => {
            if (result == true) {
                this.loadUsers();
            }
        });
    } 

    public getUserImage(imageString: any) {
        if(imageString){
            return imageString;
        }
        return "./assets/images/no-avatar.png"
    }
}
