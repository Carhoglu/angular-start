import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  books: { id: number, writer: string, book_name: string }[] = [{ 'id': 1, 'writer': 'Sabahattin Ali', 'book_name': 'Kürk Mantolu Madonna' },
  { 'id': 2, 'writer': 'Franz Kafka', 'book_name': 'Dönüşüm' },
  { 'id': 3, 'writer': 'Oğuz Atay', 'book_name': 'Tutunamayanlar' }
  ];
  
  constructor() { }

 
}

