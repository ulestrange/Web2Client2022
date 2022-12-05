import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books',component: BookListComponent},
  {path: 'profile', component: ProfileComponent,
  canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
