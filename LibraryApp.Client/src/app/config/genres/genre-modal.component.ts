import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfigService } from '../config.service';
import { IGenre } from '../../shared/models/genre';

@Component({
    templateUrl: './genre-modal.component.html'
})
export class GenreModalComponent implements OnInit {
    @Input() public genreId: number | undefined;
    public modalTitle: string = 'Внесување на жанр';
    public genre: IGenre = {} as IGenre;
    
    constructor(private activateModal: NgbActiveModal, private configService: ConfigService) { }

    ngOnInit(): void {
        if (this.genreId !== undefined) {
            this.modalTitle = 'Промена на жанр';
            this.getGenreById();
        }
     }

     public getGenreById() {
        this.configService.getGenreById(this.genreId)
            .subscribe(result => {
                this.genre = result;
            });
    }

    public confirmAction() {
        if (this.genreId !== undefined) {
            this.configService.updateGenre(this.genre)
                .subscribe(result => {
                    this.activateModal.close(true);
                });
        }
        else {
            this.configService.addGenre(this.genre)
                .subscribe(result => {
                    this.activateModal.close(true);
                });
        }
    }

    public cancelAction() {
        this.activateModal.close(false);
    }
}
