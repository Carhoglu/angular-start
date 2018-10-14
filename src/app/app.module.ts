import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
 { path: '' ,redirectTo :'library' , pathMatch : 'full'},
 { path: 'library' , component : LibraryComponent },
 { path: 'books' , component : BooksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
