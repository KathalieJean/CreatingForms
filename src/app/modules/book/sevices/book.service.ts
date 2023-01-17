import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: any[] = [
    {
      ID: 1,
      Name: 'Culture and History',
      Authors: [' Nick Joaquín'],
      ISBN: '978-3-16-148410-0'
    },
    {
      ID: 2,
      Name: 'The Alchemist',
      Authors: ['Paulo Coelho'],
      ISBN: '978-3-16-148410-1'
    },
    {
      ID: 3,
      Name: 'Paper Towns',
      Authors: ['John Green'],
      ISBN: '978-3-16-148410-2'
    }
  ];
  values : any

  constructor() { }

  getBooks() {
    return this.books
  }
}
