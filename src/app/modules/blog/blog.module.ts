import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogFormComponent } from './pages/blog-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BlogItemComponent,
    BlogListComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
