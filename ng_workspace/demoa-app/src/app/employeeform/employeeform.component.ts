import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,AbstractControlOptions } from '@angular/forms';
import { validator,emailMatchValidator } from './my-validator';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  employeeFormGroup:FormGroup = new FormGroup({});
  // formoptions:AbstractControlOptions = {validators:emailmatch}
  emprecord:any={
    fname:"M.Ajay Prasath",
    lname:"Prasath",
    email:"prasathmajay@gmail.com",
    mobile:"9688197204"
  }
  constructor(private fg:FormBuilder) {
    this.employeeFormGroup = this.fg.group({
      firstname:['',[Validators.required,Validators.minLength(3)]],
      lastname:[""],
      emailgroup:this.fg.group({
        email:['',[Validators.required,Validators.email]],
        confirmEmail:['',[Validators.required,Validators.email]],
      },{Validators:emailMatchValidator}),
      mobile:[''],
      sendnotification:['email'],
      range:['',validator(10,20)]
    });
   }
  
  ngOnInit(): void {
   
  }
/** 
   * ! is non-null assertion oopeartor(post-fix expression)
   * - it just saying to type checker that youre sure that a is not nul or undefined .
   * the opeartion a! produces a value of the type of a with
   * null and undefined excluded
   * if a is of type string then a! ensure that it will return
   * a string value , and not NULL or  UNDEFINED.
  */
  get firstname(){return this.employeeFormGroup.get('firstname')!;}
  get range(){return this.employeeFormGroup.get('range')!;}
  get email(){return this.employeeFormGroup.get('email')!;}
  get emailgroup(){return this.employeeFormGroup.get('emailgroup')!;}
  get mobile(){return this.employeeFormGroup.get('mobile')!;}

  loademployee()
  {
    let data={
      firstname:"vimal",
      lastname:'vijay'
    }
    this.employeeFormGroup.patchValue(data);
  }
  donotification(message:any)
  {
    if(message === 'sms')
    {
        let mobilecontrol = this.employeeFormGroup.get('mobile');
        mobilecontrol?.setValidators([Validators.required,validator(8000000000,9999999999)]);
        mobilecontrol?.updateValueAndValidity();
    }
  }

}
