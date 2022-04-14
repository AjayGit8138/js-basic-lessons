import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookdaoService {
  booklistone:any;
  localvalue:any;
  bookdata=[];
  array=[];
  value:any
  booklist = [{
    name: 'The Three Zeros',
    price: 270,
    author: 'Muhammad Yunus',
    canBuy: true,
    images: [
      { thumb: 'images/WorldofThreeZeros.png', full: '' }
    ],
    description: 'A winner of the Nobel Peace Prize offers his vision of an emerging new economic system that can save humankind and the planet Muhammad Yunus, who created microcredit, invented social business and earned ..',
    publishdate:Date.now(),
    discount:0.1


  },
  {
    name: 'Zero to One',
    price: 320,
    author: 'Peter Thiel',
    canBuy: false,
    images: [
      { thumb: 'images/ZeroToOne.png', full: '' }],
    description: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters',
    publishdate:Date.now(),
    discount:0.3

  }]
  constructor() {
    this.booklistone =  (localStorage.getItem('bookarray'));
    this.array = JSON.parse(this.booklistone);
    console.log(this.array);
   }
 

  getBooks()
  {
    return this.array;
    
  }
  addbook(book:any)
  {
    console.log("from service" +book.images.thumb);
    console.log('New Book added into the list'+book.name+book.author);
    this.booklist.push(book);
    console.log(this.booklist);
  
    localStorage.setItem('bookarray',JSON.stringify(this.booklist));
   
     
   
    console.log('no of books'+this.booklist.length);
    console.log(this.booklist);
  }
  updatebook(book:any)
  {
    console.log('updated book'+book.name+book.author);
  }
}
