import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hobby } from 'src/app/shared/classes/hobby';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  formHobby!: FormGroup;
  hobbies: any[];
  search: any;
  title: any;
  description: any;
  achievement: any;

  constructor(
    private formHobbyBuilder: FormBuilder,
    private dataSharingService: DataSharingService,
    private router: Router) { 
    this.hobbies = this.dataSharingService.hobbies;
  }

  ngOnInit() {
    this.initFormHobby();
  }

  initFormHobby() {
    this.formHobby = this.formHobbyBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
      description: ['', [
        Validators.required,
        Validators.minLength(5)
      ]
    ],
      achievement: ['', [
        Validators.required,
        Validators.minLength(5)
      ]
    ]
    });
  }

  isHobbyControlValid(controlHobbyName: string): boolean {
    const contolHobby = this.formHobby.controls[controlHobbyName];
    const submitHobby = contolHobby.invalid && contolHobby.touched;
    return submitHobby;
  }
  
  submitHobbyForm() {
    const controls = this.formHobby.controls;
    const controlValue = this.formHobby.value;

    if (this.formHobby.invalid) {
      Object.keys(controls)
      .forEach(controlHobbyName => controls[controlHobbyName].markAsTouched());
      return;
    }
    if(this.formHobby.valid) {
      this.hobbies.push({
        id: this.hobbies.length + 1,
        title: controlValue.title,
        description: controlValue.description,
        achievement: controlValue.achievement 
      });
      this.formHobby.reset();
    }
  }

  removeHobby(item: number) {
    this.hobbies.splice(this.hobbies.indexOf(item), 1);
  }

  FilterTitles() {
    if (this.search == '') {
      this.hobbies = this.dataSharingService.hobbies;
    } else {
      this.hobbies = this.hobbies.filter(hobby =>
        hobby.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
    }
  }
}
