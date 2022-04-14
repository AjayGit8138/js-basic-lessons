import { Component, Input, OnInit } from '@angular/core';

@Component({
 selector: 'app-book',
 templateUrl: './book.component.html',
 styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 @Input()
 book:any;
 @Input()
 idx: number = 0;
 constructor() { }

 ngOnInit(): void {
 }
 onbuy(book: any) {
  console.log('Book Added to the Cart...' + book.name + ' ' + 'Rupees:' + book.price);
  console.log(book);
 }
}