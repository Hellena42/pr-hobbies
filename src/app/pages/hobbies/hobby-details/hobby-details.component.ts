import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-hobby-details',
  templateUrl: './hobby-details.component.html',
  styleUrls: ['./hobby-details.component.scss']
})
export class HobbyDetailsComponent implements OnInit {
  hobby: any

  constructor(
    private route: ActivatedRoute,
    private dataSharingService: DataSharingService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.hobby = this.dataSharingService.getById(+params.id)
    })
  }

}
