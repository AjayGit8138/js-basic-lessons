import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boxa',
  templateUrl: './boxa.component.html',
  styleUrls: ['./boxa.component.css']
})
export class BoxaComponent implements OnInit {
  @Input()
  labelvalue:any = 'city';
  @Input()
  data:any;
  counter=0;
  @Output()
  onBoxvaluechange:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onchange(event: Event) {
    this.data = (event.target as HTMLInputElement).value;
    this.onBoxvaluechange.emit({value:this.data});
  }

}
