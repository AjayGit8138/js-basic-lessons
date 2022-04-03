import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { insertrecord } from '../table-view/table-view.component';
@Component({
  selector: 'app-pcr-form',
  templateUrl: './pcr-form.component.html',
  styleUrls: ['./pcr-form.component.css']
})
export class PcrFormComponent implements OnInit {

  constructor() { }
  personname:string = "";
  aadharno:number = 0;
  dob:number =0;
  selectcity:string = "";
  dateoftest:number=0;
  timeoftest:number= 0;
  result:string = "";
  labname:string = "";
  reportno:number = 0;
  gender:string = "";
  count:number = 0;
    person = { 
      
   }; 
  
  ngOnInit(): void {
   var count:number = 0;
  }
  resetform(form:NgForm)
  {
    form.resetForm();
  }
  checkform(){
   
     this.person = {
      pname:this.personname, 
      aadhar:this.aadharno,
      dateofbirth:this.dob,
      city:this.selectcity,
      testdate:this.dateoftest,
      testtime:this.timeoftest,
      resultval:this.result,
      nameoflab:this.labname,
      report:this.reportno,
      gendername:this.gender,
     }
     this.count++;
  var printval =Object.values(this.person);
  
     console.log(array);
    insertrecord(this.count,printval);
    
     console.log(this.count);
     console.log(this.person);
    
  }
  
    array = Object.entries(this.person);
 
}

export let array:any[]=[];
