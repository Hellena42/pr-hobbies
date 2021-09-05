import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authenticated = false;
  UserName: any;
  UserLastname: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService) {
      this.authService.isLoggedIn.subscribe(value => {
        if (value) {
          console.log('val', value);
          this.authenticated = true;
        } else {
          this.authenticated = false;
        } 
      });
      this.authService.loggedUser.subscribe(value => {
        if (this.authenticated) {
          this.UserName = value.firstname;
          this.UserLastname = value.lastname;
        }
      });
    }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(value => {
      if (value) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      } 
    });
    this.authService.loggedUser.subscribe(value => {
      if (this.authenticated) {
        this.UserName = value.firstname;
        this.UserLastname = value.lastname;
      }
    });
  }

  logout() {
    this.authService.isLoggedIn.next(false);
    this.router.navigate(['/']);
  }
}
