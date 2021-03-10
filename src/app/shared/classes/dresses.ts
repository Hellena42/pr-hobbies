export class Dresses{
  _id?: any;
  name: string;
  title: string;
  number: number;
  flag: boolean;
  isEdit?: boolean;
  dressAvailable?: boolean;

  constructor() {
    this._id = 0;
    this.name = '';
    this.title = '';
    this.number = 0;
    this.flag = false;
    this.isEdit = false;
    this.dressAvailable = false
  }
}

