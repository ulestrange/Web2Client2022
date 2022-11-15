import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  bookForm : FormGroup = new FormGroup({
    title: new FormControl ('', [Validators.required, Validators.minLength(3)]),
    year_written: new FormControl ('', [Validators.required]),
    edition: new FormControl(''),
    // price: new FormControl,
    author: new FormGroup({
      name: new FormControl(''),
      nationality: new FormControl('')
    })

  })

 message: string = "";


  
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('forms submitted with ');
    console.table(this.bookForm.value);

    this.bookService.addBook({ ...this.bookForm.value})
    .subscribe({
      next: book => {
        console.log(JSON.stringify(book) + ' has been added');
        this.message = "new book has been added";
      },
      error: (err) => this.message = err
    });
  }


  get title() {
    return this.bookForm.get('title');
  }
  get year_written() {
    return this.bookForm.get('year_written');
  }
  


}
