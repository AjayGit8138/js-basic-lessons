import { Component, OnInit } from '@angular/core';
import students from '../students.json';
import {DemoService} from '../read-json/service/demo.service';

interface Student{
    id:string,
    name:string,
    email:string,
    gender:string
}
interface data{
  name:string,
  email:string,
  age:number
}
@Component({
  selector: 'app-read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.css']
})
export class ReadJsonComponent implements OnInit {

  constructor(private demoserve:DemoService) { }
  
  studentdata:Student[] = students;
  datacollection:data[] = this.demoserve.getdata();

  ngOnInit(): void {
  }
  readdata()
  {
    console.log(this.studentdata);
    
  }

}
