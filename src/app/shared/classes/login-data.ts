export class LoginData {
  firstname: string;
  lastname: string;
  isLoggedIn: boolean;

  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.isLoggedIn = false;
  }
}