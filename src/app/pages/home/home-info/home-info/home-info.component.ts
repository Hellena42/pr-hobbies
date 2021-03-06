import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {
  @Input() myNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
