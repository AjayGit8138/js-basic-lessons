import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }
  getdata()
  {
    return [{name:'M.Ajay Prasath',email:'prasathmajay@gmail.com',age:26},
  {name:'S.Arunraj',email:'Arun@gmail.com',age:22},
{name:'Vimalraj',email:'vimal455@gmail.com',age:25},
{name:'shankar',email:'shankar98787@gmail.com',age:30},
{name:'manoj',email:'manojvar78@gmail.com',age:25},
{name:'vinith',email:'vinithkumar25@gmail.com',age:23}]
  }
}
