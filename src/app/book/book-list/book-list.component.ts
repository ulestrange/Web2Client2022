import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
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
  showBookForm: Boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (value: Book[] )=> this.bookList = value,
      complete: () => console.log('book service finished ' + this.bookList[0].title),
      error: (mess) => this.message = mess
    })

  }


  clicked (book: Book): void {
    this.currentBook = book;
  }

  dismissAlert() {
    this.message = "";
  }

  openAddBook(): void {
    this.currentBook = undefined;
    this.showBookForm = true;
  }

  openEditBook(): void {
    this.showBookForm = true;
  }


// note: the method below will delet a book once the button is pressed.
// this is not great UX, users should normally be asked to verify that they want to delete something.
// consider how you might implement that.

  deleteBook() {
    console.log('deleting a book ');
    if (this.currentBook) {
      this.bookService.deleteBook(this.currentBook._id)
        .subscribe({
          next: book => {
            console.log(JSON.stringify(book) + ' has been delettted');
            this.message = "book has been delettteed";
            this.ngOnInit();
          },
          error: (err) => this.message = err
        });
    }

    // so the updated list appears

  
    this.currentBook=undefined;

  }

  updateBook(id: string, book: Book): void {
    console.log('updating ');
    console.table (book);
    this.bookService.updateBook(id, book)
      .subscribe({
        next: book => {
          console.log(JSON.stringify(book) + ' has been updated');
          this.message = " book has been updated";
           this.ngOnInit();     
          this.currentBook = undefined   },
        error: (err) => this.message = err
      });
    // so the updated list appears

   
  }


  bookFormClose(book?: any): void {
    this.showBookForm = false;
    console.table(book);
    if (book == null) {
      this.message = "form closed without saving";
      this.currentBook = undefined
    }
    else if (this.currentBook == null) {
     this.addNewBook(book);
    }
    else {
     this.updateBook(this.currentBook._id, book)
    }
  }

  addNewBook(newBook: Book): void {
    console.log('adding new book ' + JSON.stringify(newBook));
    this.bookService.addBook({ ...newBook })
      .subscribe({
        next: book => {
          console.log(JSON.stringify(book) + ' has been added');
          this.message = "new book has been added";
          this.ngOnInit();
        },
        error: (err) => this.message = err
      });

    // so the updated list appears

  
  }

  
  isSelected(book: Book): boolean {
    if (!book || !this.currentBook) {
      return false;
    }
    else {
      return book._id === this.currentBook._id;
    }
  }

}
