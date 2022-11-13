
import { Injectable } from '@angular/core';
import { Book } from './book'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators'

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private dataUri = `${environment.apiUri}/books`;

  constructor(private http: HttpClient) { }



  getBooks(): Observable<Book[]> {

    console.log("get books called" );

    return this.http.get<Book[]>(`${this.dataUri}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );

  }

  getBook(id: String): Observable<Book> {

    console.log("get books called" );

    return this.http.get<Book>(`${this.dataUri}/${id}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );

  }

  deleteBook(id: string): Observable<unknown> {
    const url = `${this.dataUri}/${id}`; // DELETE 
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateBook(id: string, book: Book): Observable<Book> {
    console.log('subscribing to update/' + id);
    let bookURI: string = this.dataUri + '/' + id;
    return this.http.put<Book>(bookURI, book)
      .pipe(
        catchError(this.handleError)
      )
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.dataUri, book)
      .pipe(
        catchError(this.handleError)
      )
  }


  //taken from: https://angular.io/guide/http

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}