import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IGenre } from '../../shared/models/genre';
import { ConfigService } from '../config.service';
import { GenreModalComponent } from './genre-modal.component';
import { WarningDialogComponent } from '../../shared/dialogs/warning-dialog.component';


@Component({
    
    templateUrl: './genres.component.html',
    
})
export class GenresComponent implements OnInit {
    public genres: IGenre[];

    constructor(private configService: ConfigService, private modalService: NgbModal) { }

    public ngOnInit(): void {
        this.loadGenres();
     }

    public deleteGenre(genre: IGenre) {
        const modalRef = this.modalService.open(WarningDialogComponent, { size: 'sm' });

        modalRef.result.then((result) => {
            if (result == true) {
                this.configService.deleteGenre(genre.id)
                .subscribe(result => {
                    if (result) {
                        this.loadGenres();
                    }
                });
            }
        });
    }

    public updateGenre(genre: IGenre) {
        this.openGenreModal(genre.id);
    }

    public addGenre() {
        this.openGenreModal(undefined);

    }

    public loadGenres() {
        this.configService.loadGenres()
        .subscribe(result => {
           this.genres = result; 
        });
    }

    public openGenreModal(genreId: number | undefined) {
        const modalRef = this.modalService.open(GenreModalComponent);
        modalRef.componentInstance.genreId = genreId;

        modalRef.result.then((result) => {
            if (result == true) {
                this.loadGenres();
            }
        });
    }
}
