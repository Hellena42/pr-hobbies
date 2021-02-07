import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  hobbies: any [];

  constructor() {
    this.hobbies = [
      {
        id: 1,
        title: 'Чтение',
        description: 'Ведьмаку заплатите',
        achievement: 'Книжный червь'
      }, {
        id: 2,
        title: 'Спать',
        description: 'Сегодня лягу спать пораньше',
        achievement: 'Дергающийся глаз'
      }, {
        id: 3,
        title: 'Прокрастинация',
        description: 'Завтра начну',
        achievement: 'Человек-прокрастинатор'
      }, {
        id: 4,
        title: 'Нудеть',
        description: 'Все не так и все не то',
        achievement: 'Ойвсе'
      }
    ]; ;
  }
  getById(id: number) {
    return this.hobbies.find(h => h.id === id)
  }
}