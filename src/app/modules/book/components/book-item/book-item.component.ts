import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../sevices/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() book: any | undefined;
  @Input() bookForm: FormGroup | undefined;
 

  constructor(private router: Router, private bookService: BookService) { }

  editBook(book: any) {
    this.router.navigate(['book-form/form', book]);
    
    // localStorage.setItem('name', JSON.stringify(this.bookForm))    
  }
  

  deleteBook() {
    console.log(`Deleting book: ${this.book.name}`);
  }
}

