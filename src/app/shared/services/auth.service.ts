import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginData } from 'src/app/shared/classes/login-data';
        
@Injectable({providedIn: 'root'})

export class AuthService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedUser: BehaviorSubject<LoginData> = new BehaviorSubject(<LoginData>{});

  firstname: any;
  lastname: any;
    
  constructor(public router: Router) {
    
  }

  getUsername() {
    return this.loggedUser.getValue();
  }

  login(user: LoginData){
    this.isLoggedIn.next(true);
    this.loggedUser.next(user);
    this.firstname = this.loggedUser.value.firstname;
    this.lastname = this.loggedUser.value.lastname;
    this.router.navigate(['home']);
  }
}