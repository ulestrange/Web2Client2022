import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/book';
//import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Output() bookFormClose = new EventEmitter<Book>();

  @Input() book? : Book;

  bookForm : FormGroup = new FormGroup({});






  constructor() { }

  ngOnInit(): void {

    this.bookForm  = new FormGroup({
      title: new FormControl (this.book?.title, [Validators.required, Validators.minLength(4)]),
      year_written: new FormControl (this.book?.year_written, [Validators.required]),
      edition: new FormControl(this.book?.edition),
      price: new FormControl(this.book?.price),
      author: new FormGroup({
        name: new FormControl(this.book?.author.name),
        nationality: new FormControl(this.book?.author.nationality)
      })
    })
  }

  onSubmit(){
    console.log('forms submitted with: ');
    console.table(this.bookForm?.value);
    this.bookFormClose.emit(this.bookForm?.value);
  }
  
  closeForm() {
    this.bookFormClose.emit(undefined)

  }

// these getters make displaying the validation errors easier

  get title() {
    return this.bookForm?.get('title');
  }
  get year_written() {
    return this.bookForm?.get('year_written');
  }
  


}
