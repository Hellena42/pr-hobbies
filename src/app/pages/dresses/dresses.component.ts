import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dresses } from 'src/app/shared/classes/dresses';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss']
})
export class DressesComponent implements OnInit {
   httpOptions = {
    headers: new HttpHeaders({
      'X-Appery-Database-Id': '58226eeee4b0a696f3532f3d'
    })
  };
  DATABASE_URL = 'https://api.appery.io/rest/1/db/collections/testCollection/';
  dresses: Dresses[] = [];
  dressName = '';
  dressTitle = '';
  dressAmount: any;
  dressAvailable = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDressList();
  }

  getDressList() {
    this.http.get<Dresses[]>(this.DATABASE_URL, this.httpOptions)
    .subscribe(dresses => {
      this.dresses = dresses;
    });
  }

  addDress() {
    const newDress: Dresses = {
      name: this.dressName,
      title: this.dressTitle,
      number: this.dressAmount,
      flag: this.dressAvailable
    }

    this.http.post<Dresses>(this.DATABASE_URL, newDress, this.httpOptions).subscribe(data => {
      //option1
        // this.getDressList();
      //option2
      newDress._id = data._id;
      this.dresses.push(newDress);
    });

    this.dressName = '';
    this.dressTitle = '';
    this.dressAmount = '';
    this.dressAvailable = false;
  };

  deleteDress(id: string) {
    this.http.delete<Dresses>(this.DATABASE_URL + id, this.httpOptions).subscribe(item => {
      let newDresses = this.dresses;
      for (let i=0; i<newDresses.length; i++) {
        let currDress = newDresses[i];
        if (currDress._id === id) {
          newDresses.splice(i, 1);
          this.dresses = newDresses;
          break;
        }
      }
    });
  }

  cancelEdit(dress: any) {
    dress.isEdit = false;
    dress.dressName = '';
    dress.dressTitle = '';
    dress.dressAmount = '';
    dress.dressAvailable = false;
  }

  saveDress(id: string, dress: any) {
    dress.isEdit = false;
    const editedDress: Dresses = {
      name: dress.name,
      title: dress.title,
      number: +dress.number,
      flag: dress.flag
    }

    console.log(editedDress, id);

    this.http.put<Dresses>(this.DATABASE_URL + id, editedDress, this.httpOptions).subscribe(item => {
      for(let i=0; i < this.dresses.length; i++) {
        if(this.dresses[i]._id == id) {
          this.dresses[i].name = editedDress.name;
          this.dresses[i].title = editedDress.title;
          this.dresses[i].number = editedDress.number;
          this.dresses[i].flag = editedDress.flag;
          break;
        }
      }
    });
  }
}