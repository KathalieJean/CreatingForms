import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() blog: any | undefined;

  editBlog() {
    // logic to edit blog goes here
    console.log(`Editing blog: ${this.blog.name}`);
  }

  deleteBlog() {
    // logic to delete blog goes here
    console.log(`Deleting blog: ${this.blog.name}`);
  }

}
