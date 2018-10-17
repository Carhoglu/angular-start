import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembersComponent } from './members/members.component';
import { PipesComponent } from './pipes/pipes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'library', component: LibraryComponent },
  { path: 'books', component: BooksComponent },
  { path: 'members', component: MembersComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '**', component: LibraryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    BooksComponent,
    MembersComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
