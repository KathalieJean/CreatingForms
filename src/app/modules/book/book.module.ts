import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookItemComponent,
    BookListComponent,
  

  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class BookModule { }
