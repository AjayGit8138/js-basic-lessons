import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookdaoService } from '../bookdao.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css'],
})
export class BookformComponent implements OnInit {
  bookForm: FormGroup;
  // no: string;

  @Input()
  book = {
    name: '',
    price: '',
    author: '',
    canBuy: false,
    image:'',
    description: '',
    publishdate: '',
    discount: '',
  };
  path:string = '';
  imagename:string = '';
  imageobject=[{thumb:'',full:''}];
  constructor(
    private fb: FormBuilder,
    private bookserv: BookdaoService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      name: [this.book.name, [Validators.required, Validators.minLength(3)]],
      price: [this.book.price],
      author: [
        this.book.author,
        [Validators.required, Validators.minLength(3)],
      ],
      canBuy: [this.book.canBuy],
      images:this.book.image,
      description: [this.book.description],
      publishdate: [
        this.book.publishdate,
        [Validators.required, Validators.minLength(3)],
      ],
      discount: [this.book.discount],
    });
  }

  ngOnInit(): void {}

  get name() {
    return this.bookForm.get('name')!;
  }
  get author() {
    return this.bookForm.get('author')!;
  }
  checkfile(event:any)
  {
    console.log(event.target.files[0]);
    this.imagename = event.target.files[0].name;
    this.imagename = `images/`+this.imagename;
    console.log(this.imagename);
  }
  onAddButtonClick(book: any) {
    console.log('Button Clicked' + ' ' + book.name);
    console.log(book.image);
    book.images = this.imagename;
    this.imageobject[0].thumb = this.imagename;
    console.log(this.imageobject);
    book.images = this.imageobject;
    console.log(book.images);
    try {
      this.bookserv.addbook(book);
      this.router.navigate(['/books']);
    } catch (err: any) {
      console.log('ERROR!!' + err.message);
    }
  }
}