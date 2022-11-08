import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { DummybookService } from 'src/app/dummybook.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: Book[] = [];
  message: string = "";

  currentBook : Book | undefined;

  constructor(private bookService: DummybookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (value: Book[] )=> this.bookList = value,
      complete: () => console.log('book service finished'),
      error: (mess) => this.message = mess
    })

  }


  clicked (book: Book): void {
    this.currentBook = book;
  }


}
