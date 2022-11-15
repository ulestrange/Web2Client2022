import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookRowComponent } from './book/book-row/book-row.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleFormComponent } from './book/sample-form/sample-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    BookDetailsComponent,
    BookRowComponent,
    SampleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
