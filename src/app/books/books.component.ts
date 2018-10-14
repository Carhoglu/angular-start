import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books_get : { id: number, writer: string, book_name: string } [] =[];

  constructor(private  libService : LibraryService) { }

  ngOnInit() {
     this.books_get=this.libService.books;
     console.log(this.books_get);
  }
}
