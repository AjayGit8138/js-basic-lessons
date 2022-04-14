import { Component, OnInit } from '@angular/core';
import { BookdaoService } from '../bookdao.service';

@Component({
  selector: 'app-bookcatalog',
  templateUrl: './bookcatalog.component.html',
  styleUrls: ['./bookcatalog.component.css']
})
export class BookcatalogComponent implements OnInit {
  books: Array<any> = [];
 
  constructor(private bookserv:BookdaoService) { }

  ngOnInit(): void {
    this.books = this.bookserv.getBooks();
    console.log(this.books);
   }

}
