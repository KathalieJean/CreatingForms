import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form.component';

const routes: Routes = [

  { 
    path: '', 
    component: BookListComponent 
  },
  {
    path: 'book-form/form',
    component: BookFormComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookFormRoutingModule { }
