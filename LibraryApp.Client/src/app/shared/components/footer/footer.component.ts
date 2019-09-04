import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
    selector: 'library-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
    public showFooterDetails = false;

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.url.indexOf('home') != -1) {
                    this.showFooterDetails = true;
                }
                else {
                    this.showFooterDetails = false;
                }
            }
        });
    }

    ngOnInit(): void { }
}
