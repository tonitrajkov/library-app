import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfigService } from '../config.service';
import { IAuthor } from '../../shared/models/author';
import { IRole } from '../../shared/models/role';

@Component({
    templateUrl: './author-modal.component.html',
})
export class AuthorModalComponent implements OnInit {
    
    @Input() public authorId: number | undefined;
    public submitted = false;    
    public modalTitle: string = 'Внесување на автор';
    public author: IAuthor = {} as IAuthor;
    public imageFile: any;
    public authorImgPreview: any;

    constructor(
        private activateModal: NgbActiveModal,
        private configService: ConfigService
    ) { }

    ngOnInit(): void {
        
        if (this.authorId !== undefined) {
            this.modalTitle = 'Промена на автор';
            this.getAuthorById();
        }
    }

    public getAuthorById() {
        this.configService.getAuthorById(this.authorId)
            .subscribe(result => {
                this.author = result;
                this.authorImgPreview = !!this.author.imageUrl ? 'data:image/jpg;base64,' + this.author.imageUrl : '';
            });
    }
    
    public confirmAction(isFormValid: boolean) {
        this.submitted = true;

        if (isFormValid === true) {
            if (this.authorId !== undefined) {
                this.configService.updateAuthor(this.author, this.imageFile)
                    .subscribe(result => {
                        this.activateModal.close(true);
                    });
            }
            else {
                this.configService.addAuthor(this.author, this.imageFile)
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
                this.authorImgPreview = reader.result;
            };
        }
    }
}
