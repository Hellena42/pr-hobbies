import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ETIME } from 'constants';
import { BehaviorSubject } from 'rxjs';
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

  filteringDresses: Dresses[] = [];

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.getDressList();
  }

  getDressList() {
    this.http.get<Dresses[]>(this.DATABASE_URL, this.httpOptions)
    .subscribe(dresses => {
      this.dresses = dresses;
      this.filteringDresses = dresses;

      this.filteredValue.subscribe(f => {
        this.dresses = dresses;
        
        f.forEach((el:any) => {
          if (el.title === 'до 5') {
            this.dresses = this.filteringDresses.filter(n => {
              return (n.number <= 5);
            });
          } else if (el.title === 'от 6 до 11') {
            this.dresses = this.filteringDresses.filter(n => {
              return (n.number > 5 && n.number <= 11);
            });
          } else if (el.title === 'от 12 до 150') {
            this.dresses = this.filteringDresses.filter(n => {
              return (n.number > 12 && n.number <= 150);
            });
          } else if (el.title === 'от 151 до 400') {
            this.dresses = this.filteringDresses.filter(n => {
              return (n.number > 151 && n.number <= 400);
            })
          }
        });
      })
    },
      err => {
        console.log(err);
      }
    );
  }


  // getDressList() {
  //   this.http.get<Dresses[]>(this.DATABASE_URL, this.httpOptions)
  //   .subscribe(dresses => {
  //     this.dresses = dresses;
  //   },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

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


  //sort and filter

  filteredList: any[] = [];
  filteredValue: BehaviorSubject<any> = new BehaviorSubject([]);

  onFilter (value: any[]) {
    this.filteredValue.next(value);
    console.log("value", value);
  }

  filterList = [
    {
      title: 'до 5',
      checked: false,
    },
    {
      title: 'от 6 до 11',
      checked: false,
    },
    {
      title: 'от 12 до 150',
      checked: false,
    },
    {
      title: 'от 151 до 400',
      checked: false,
    }
  ];

  onItemChanged (val: any){

    //Select one checkbox
    // this.filteredList.forEach(el => {
    //   el.checked = false;
    // });

   if (!val.checked) {
     val.checked = true;
     this.filteredList.push(val);
   } else {
     val.checked = false;
     let index = this.filteredList.indexOf(val);
     if (index >= 0) {
       this.filteredList.splice(index, 1);
     }
   }
  
   this.onFilter(this.filteredList);
  }
}