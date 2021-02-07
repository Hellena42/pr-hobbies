import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserStateService } from 'src/app/shared/services/user-state.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  form!: FormGroup;
  dataForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userState: UserStateService) {
      this.dataForm = this.userState.formData;
    } 

  ngOnInit(): void {
    this.initForm();
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
        Validators.minLength(3)
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
    const usename = this.dataForm.firstname;
    const userLastname = this.dataForm.lastname;
    let isLoggedIn = this.dataForm.isLoggedIn;

    if (this.form.invalid) {
      Object.keys(controls)
      .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    if(controlValue.firstname == usename, controlValue.lastname == userLastname) {
      const formData = {...controlValue};
      isLoggedIn = true;
      this.router.navigate(['home'], controlValue.firstname);
      console.log('Login page: ', formData);
    }
  }
}
