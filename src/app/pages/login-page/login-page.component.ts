import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserStateService} from 'src/app/shared/services/user-state.service';
import {AuthService} from '../../shared/services/auth.service';
import { LoginData } from 'src/app/shared/classes/login-data';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  form!: FormGroup;
  dataForm: any;
  userName: LoginData = new LoginData();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userState: UserStateService,
    public authService: AuthService) {
      this.dataForm = this.userState.formData;
    } 

  ngOnInit(): void {
    this.initForm();
    // this.userName = this.authService.getUsername();
    this.authService.getUsername();
  }

  initForm() {
    this.form = this.formBuilder.group({
      firstname: ['', [
        Validators.required,
        Validators.minLength(2)
      ]
    ],
      lastname: ['', [
        Validators.required,
        Validators.minLength(2)
      ]
    ]
    });
  }

  isControlValid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  };

  onSubmit() {
    const controls = this.form.controls;
    const controlValue = this.form.value;
    const userFirstname = '11';
    const userLastname = '11';

    if (this.form.invalid) {
      Object.keys(controls)
      .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    if (controlValue.firstname === userFirstname && controlValue.lastname === userLastname) {
      this.form.reset();
      this.authService.login(controlValue);
    }
  }
}
