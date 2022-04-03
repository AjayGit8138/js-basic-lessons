import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})

export class TableViewComponent implements OnInit {
  constructor() { }
  count:number= 0;
  
  ngOnInit(): void {
   
  }
  personarray:any[]=[];
 
  
  call()
  {
  console.log("Hai output");
  var findval = document.getElementById("findval") as HTMLInputElement;
  finding(findval.value);
  var showtable = document.getElementById("resultdisplay") as HTMLTableElement;
  showtable.classList.toggle("showsecondtable");
  }
   
}

  
export function insertrecord(count:number,valuesdata:any) {

     
  console.log(valuesdata);
  
  console.log(count);
   var table = (<HTMLTableElement>document.getElementById("displaying-data"));
   console.log(table);
  var i = 0;
      var row = table.insertRow(count);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);
var cell10 = row.insertCell(9);


cell1.innerHTML = valuesdata[i++];
cell2.innerHTML = valuesdata[i++];
cell3.innerHTML = valuesdata[i++];
cell4.innerHTML = valuesdata[i++];
cell5.innerHTML = valuesdata[i++];
cell6.innerHTML = valuesdata[i++];
cell7.innerHTML = valuesdata[i++];
cell8.innerHTML = valuesdata[i++];
cell9.innerHTML = valuesdata[i++];
cell10.innerHTML = valuesdata[i++];
     
count++;
}
 var search = document.getElementById("valsearch") as HTMLButtonElement;
 search?.addEventListener("click",(e:Event)=>{
      alert("caution");
 })


function finding(input:any)
{
  var array = new Array();
  var count = 0;
  var k=1;
  var i=1;
   var table = (<HTMLTableElement>document.getElementById("displaying-data"));
   var rowDetails =  table.getElementsByTagName("tr").length;
  console.log(rowDetails);
for(var m=0;m<rowDetails-2;m++)
{
  for(var g=0;g<1;g++)
  {
    const rowid = document.querySelector('#displaying-data') as HTMLTableElement;
    const rowseach = rowid.tBodies[0].rows[count].cells.item(1)?.innerText;
    var resulttable = document.getElementById('result-table') as HTMLTableElement;
    var resultshow = resulttable.tBodies[0].rows[0].cells.item(1)?.innerText;
    console.log("rowseach"+rowseach);
    array.push(rowseach);
    console.log(array);
    console.log(count);
  
    if(rowseach == input)
    {
      for(var h=0;h<10;h++)
      {
       resultshow =  rowid.tBodies[0].rows[count].cells.item(h)?.innerText;
       array.push(resultshow);
      }
       var row = resulttable.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
       var cell6 = row.insertCell(5);
       var cell7 = row.insertCell(6);
       var cell8 = row.insertCell(7);
       var cell9 = row.insertCell(8);
       var cell10 = row.insertCell(9);
       
       
       cell1.innerHTML = `${array[i++]}`;
       cell2.innerHTML = `${array[i++]}`;
       cell3.innerHTML = `${array[i++]}`;
       cell4.innerHTML = `${array[i++]}`;
       cell5.innerHTML = `${array[i++]}`;
       cell6.innerHTML = `${array[i++]}`;
       cell7.innerHTML = `${array[i++]}`;
       cell8.innerHTML = `${array[i++]}`;
       cell9.innerHTML = `${array[i++]}`;
       cell10.innerHTML = `${array[i++]}`;
        console.log("value present" + rowseach);
  }
}
count++;
}
}

