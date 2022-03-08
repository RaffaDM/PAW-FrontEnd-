import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree  } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUserGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('currentPerson')){
        let token = JSON.parse(localStorage.getItem('currentPerson'))
        if (token.permission ==3) {
          return true;
        }
      }
  
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  
      return false;
  }
  
}
