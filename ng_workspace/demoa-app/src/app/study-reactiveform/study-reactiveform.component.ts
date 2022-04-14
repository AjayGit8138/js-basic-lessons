import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validator } from '../employeeform/my-validator';

@Component({
  selector: 'app-study-reactiveform',
  templateUrl: './study-reactiveform.component.html',
  styleUrls: ['./study-reactiveform.component.css']
})
export class StudyReactiveformComponent implements OnInit {
  studentForm:FormGroup;
  constructor() {
    this.studentForm = new FormGroup({
        username:new FormControl(null,Validators.required),
        regisno:new FormControl(null,Validators.required),
        department:new FormControl(null,Validators.required),
        email:new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        city:new FormControl(null,Validators.required),
        mobileno:new FormControl(null,Validators.required),
        gender:new FormControl(null,Validators.required)
    });
   }

   get email(){return this.studentForm.get('email');}

  ngOnInit(): void {
   
  }

}
