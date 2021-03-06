import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dresses } from 'src/app/shared/classes/dresses';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss']
})
export class DressesComponent implements OnInit {
  dresses: Dresses[] = []; 
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Dresses[]>('https://api.appery.io/rest/1/db/collections/dress/', {
      headers: {
        'X-Appery-Database-Id': '5a17341e2e22d72a380932ea'
      }
    })
    .subscribe(dresses => {
      this.dresses = dresses;

      this.dresses.forEach(function(el) {
        if (el.size?.length === 0) {
          el.size.push('n/a');
        }
      });
    })
  }
}
