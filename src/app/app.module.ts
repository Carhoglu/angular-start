import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembersComponent } from './members/members.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpComponent } from './http/http.component';
import { ServerService } from './http/server.service';
import { HttpModule } from '@angular/http';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'library', component: LibraryComponent },
  { path: 'books', component: BooksComponent },
  { path: 'members', component: MembersComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'http',component:HttpComponent },
  { path: 'signup',component:SignupComponent },
  { path: 'signin',component: SigninComponent},
  { path: '**', component: LibraryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    BooksComponent,
    MembersComponent,
    PipesComponent,
    HttpComponent,
    ShortenPipe,
    FilterPipe,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ServerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
