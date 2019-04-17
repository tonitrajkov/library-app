import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config.service';
import { IUser } from '../../shared/models/user';
import { IRole } from 'src/app/shared/models/role';

@Component({
    templateUrl: './user-modal.component.html',
})
export class UserModalComponent implements OnInit {
    @Input() public userId: number | undefined;
    public submitted = false;
    public modalTitle: string = 'Внесување на корисник';
    public user: IUser = {} as IUser;
    public imageFile: any;
    public userImgPreview: any;
    public roles: IRole[];

    constructor(private activateModal: NgbActiveModal, private configService: ConfigService) { }

    ngOnInit(): void {
        this.loadAllRoles();
        
        if (this.userId !== undefined) {
            this.modalTitle = 'Промена на корисник';
            this.getUserById();
        }
    }
    public getUserById() {
        this.configService.getUserById(this.userId)
            .subscribe(result => {
                this.user = result;
            });
    }

    public loadAllRoles() {
        this.configService.loadRoles()
            .subscribe(result => {
                this.roles = result;
            });
    }


    public confirmAction(isFormValid: boolean) {
        this.submitted = true;

        if (isFormValid === true) {
            if (this.userId !== undefined) {
                this.configService.updateUser(this.user)
                    .subscribe(result => {
                        this.activateModal.close(true);
                    });
            }
            else {
                // this.user.roles = [];
                this.configService.addUser(this.user, this.imageFile)
                    .subscribe(result => {
                        this.activateModal.close(true);
                    });
            }
        }
    }

    public cancelAction() {
        this.activateModal.close(false);
    }

    public onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            this.imageFile = event.target.files[0];
            reader.readAsDataURL(this.imageFile);
            reader.onload = () => {
                this.userImgPreview = reader.result;
            };
        }
    }
}
