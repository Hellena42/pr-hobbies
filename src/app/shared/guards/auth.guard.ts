import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

        
@Injectable({providedIn: 'root'})
  export class AuthGuard implements CanActivate {
  constructor (
    private router: Router,
    private auth: AuthService
    ) {}
      
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const currentUser = this.auth.isLoggedIn.getValue();
    if(currentUser) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}