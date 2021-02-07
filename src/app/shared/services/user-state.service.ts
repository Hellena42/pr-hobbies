import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserStateService {
  formData: {};

   constructor() {
     this.formData = {
       firstname: 'Ben',
       lastname: 'Kenobi',
       isLoggedIn: false
     }   
   }

}