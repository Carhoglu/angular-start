import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from '../library.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @ViewChild('f')
  form: NgForm;
  book_id;
  book_writer = '';
  book_name = '';
  book_id_;
  book_writer_ = '';
  book_name_ = ' ';
  books_get: { id: number; writer: string; book_name: string }[] = [];
  defaultSelect = 'kayitsiz';
  temp ;
  constructor(private libService: LibraryService) {}

  ngOnInit() {
    this.books_get = this.libService.books;
    console.log(this.books_get);
  }

  onSubmit() {
    console.log(this.form);
  }

  onSubmitData() {
    this.temp = true ;
    this.book_id_ = this.form.value.bookData.book_id;
    this.book_writer_ = this.form.value.bookData.book_writer;
    this.book_name_ = this.form.value.bookData.book_name;
    this.libService.books.push( {id  : this.book_id_, writer : this.book_writer_, book_name : this.book_name_
     } );
    this.form.reset();
  }
  setVariables() {
    this.form.setValue({
      bookData: {
        book_id: 50,
        book_writer: 'Yazar',
        book_name: 'Kitap ismi'
      }
    });
  }

  patchingVariables() {
    this.form.form.patchValue({
      bookData: {
        book_writer: 'Namık Kemal'
      }
    });
  }
}
