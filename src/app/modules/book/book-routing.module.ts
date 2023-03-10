import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './pages/book-form.component';

const routes: Routes = [

  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-form/form/:id',
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
export class BookRoutingModule { }
