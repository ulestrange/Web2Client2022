import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm : FormGroup = new FormGroup({
    title: new FormControl ('', [Validators.required, Validators.minLength(4)]),
    year_written: new FormControl ('', [Validators.required]),
    edition: new FormControl(''),
    price: new FormControl,
    author: new FormGroup({
      name: new FormControl(''),
      nationality: new FormControl('')
    })
  })

 message: string = "";


  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('forms submitted with ');
    console.table(this.bookForm.value);
  }


  get title() {
    return this.bookForm.get('title');
  }
  get year_written() {
    return this.bookForm.get('year_written');
  }
  


}
