import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookDetailGuard implements CanActivate {

constructor(private router: Router) {

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id = +next.url[1].path;
      if (isNaN(id) || id < 1) {
        alert("Invalid book Id");
        this.router.navigate(['/books']);
        return false;
      };
    return true;
  }
}
