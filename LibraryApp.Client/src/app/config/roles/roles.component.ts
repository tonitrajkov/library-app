import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IRole } from '../../shared/models/role';
import { ConfigService } from '../config.service';
import { RoleModalComponent } from '../roles/role-modal.component';
import { WarningDialogComponent } from '../../shared/dialogs/warning-dialog.component';

@Component({
    templateUrl: './roles.component.html',
})

export class RolesComponent implements OnInit {
    public roles: IRole[];
    
    constructor(private configService: ConfigService, private modalService: NgbModal) { }

    ngOnInit(): void { 
        this.loadRoles();
    }
    public deleteRole(role: IRole) {
        const modalRef = this.modalService.open(WarningDialogComponent, { size: 'sm' });
        
                modalRef.result.then((result) => {
                    if (result == true) {
                        this.configService.deleteRole(role.id)
                        .subscribe(result => {
                            if (result) {
                                this.loadRoles();
                            }
                        });
                    }
                });
    }

    public updateRole(role: IRole) {
        this.openRoleModal(role.id);
    }

    public addRole() {
        this.openRoleModal(undefined);

    }

    public loadRoles() {
        this.configService.loadRoles()
        .subscribe(result => {
           this.roles = result; 
        });
    }

    public openRoleModal(roleId: number | undefined) {
        const modalRef = this.modalService.open(RoleModalComponent);
        modalRef.componentInstance.roleId = roleId;

        modalRef.result.then((result) => {
            if (result == true) {
                this.loadRoles();
            }
        });
    }
}
