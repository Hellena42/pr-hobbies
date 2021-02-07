import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  firstname: string = '';
  
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.firstname =  this.route.snapshot.params['firstname'];
    console.log('Header: ', this.firstname);
  }

  logout() {
    this.router.navigate(['/']);
  }

}
