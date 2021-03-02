import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hobbies: any [];
  display: boolean = false;

  constructor(
    private dataSharingService: DataSharingService, private router: Router) {
      this.hobbies = this.dataSharingService.hobbies;
   }

  ngOnInit(): void {
  }

  showInfo() {
    if(!this.display) {
      this.display = true;
      this.router.navigate(['/home', 'home-info']);
    } else {
      this.display = false;
      this.router.navigate(['/home']);
    }
  }
}
