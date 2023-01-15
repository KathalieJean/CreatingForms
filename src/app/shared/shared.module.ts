import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { RouterModule } from '@angular/router';
import { BookFormModule } from '../modules/book/pages/book-form.module';



@NgModule({
  declarations: [
    HeaderComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookFormModule
  ],
  exports: [ HeaderComponent, CommandBarComponent ]
})
export class SharedModule { }
