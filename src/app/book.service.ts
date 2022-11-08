// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Book } from './book';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookService {

//   constructor() { }


//   private dummyBooksData : Book[] = [{"_id":"61643ac437689140c4239e5f",
//   "title":"Huckleberry Finn","author":{"name":"Twain, Mark","nationality":"American"},
//   "year_written":1865,"edition":"Penguin","price":5.76},{
//   "_id":"61643ac437689140c4239e61","title":"Tom Sawyer",
//   "author":{"name":"Twain, Mark","nationality":"American"},
//   "year_written":1862,"edition":"Random House","price":7.75},
//   {"_id":"61643ac437689140c4239e65",
//   "title":"Hamlet, Prince of Denmark",
//   "author":{"name":"Shakespeare","nationality":"English"},
//   "year_written":1603,"edition":"Signet  Classics","price":7.95},
//   {"_id":"61643ac437689140c4239e5e","title":"The Hours",
//   "author":{"name":"Cunnningham, Michael", "nationality": "British"},"year_written":1999,
//   "edition":"Harcourt Brace","price":12.35},{
//   "_id":"61643ac437689140c4239e5b","title":"War and Peace",
//   "author":{"name":"Tolstoy, Leo","nationality":"Russian"},
//   "year_written":1865,"edition":"Penguin","price":12.7}]


//   getBooks(): Observable<Book[]>{
//     console.log('Dummy getBooks called');

//     return of(this.dummyBooksData);
//   }



//   //taken from: https://angular.io/guide/http


// }
