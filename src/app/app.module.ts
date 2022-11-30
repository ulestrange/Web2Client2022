import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookRowComponent } from './book/book-row/book-row.component';

import { ReactiveFormsModule } from '@angular/forms';
import {BookFormComponent } from './book/book-form/book-form.component';
import { environment } from 'src/environments/environment';
import { AuthButtonComponent } from './user/auth-button/auth-button.component';
import { CallbackComponent } from './user/callback/callback.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    BookDetailsComponent,
    BookRowComponent,
    BookFormComponent,
    AuthButtonComponent,
    CallbackComponent,
    ProfileComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot({...environment.auth0,
      httpInterceptor: {
        allowedList: [`${environment.apiUri}/books`],
      },})
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
