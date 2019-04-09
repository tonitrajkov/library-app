import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config.service';
import { IRole } from '../../shared/models/role';

@Component({
    templateUrl: './role-modal.component.html',
})
export class RoleModalComponent implements OnInit {

    @Input() public roleId: number | undefined;
    public submitted = false;    
    public modalTitle: string = 'Внесување на улога';
    public role: IRole = {} as IRole;

    constructor(private activateModal: NgbActiveModal, private configService: ConfigService) { }

    ngOnInit(): void { if (this.roleId !== undefined) {
        this.modalTitle = 'Промена на улога';
        this.getRoleById();
    }
 }

 public getRoleById() {
    this.configService.getRoleById(this.roleId)
        .subscribe(result => {
            this.role = result;
        });
}

public confirmAction(isFormValid: boolean) {
    this.submitted = true;

    if (isFormValid === true) {
    if (this.roleId !== undefined) {
        this.configService.updateRole(this.role)
            .subscribe(result => {
                this.activateModal.close(true);
            });
    }
    else {
        this.configService.addRole(this.role)
            .subscribe(result => {
                this.activateModal.close(true);
            });
        }
    }
}

public cancelAction() {
    this.activateModal.close(false);
}
}
