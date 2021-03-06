import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hobbies: any [];

  constructor(
    private dataSharingService: DataSharingService, private router: Router) {
      this.hobbies = this.dataSharingService.hobbies;
   }

  ngOnInit(): void {
  }
}
