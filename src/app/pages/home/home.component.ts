import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hobbies: any [];

  constructor(
    private dataSharingService: DataSharingService) {
      this.hobbies = this.dataSharingService.hobbies;
   }

  ngOnInit(): void {
  }

}
