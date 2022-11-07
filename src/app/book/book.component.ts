import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DummybookService } from '../dummybook.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  message: String = '';

  constructor(private bookService : DummybookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (value: Book[]) => this.books = value,
      complete: () => console.log('book service finished'),
      error: (message) => this.message = message

    }) 

  }


}
