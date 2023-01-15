import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: any[] = [
    {
      ID: 1,
      Title: 'Billboard',
      Description: ' Billboard powers the ultimate global music destination and magazine, featuring unrivaled reporting on music news, issues and trends.',
      Authors: ['Rania Aniftos'],
      Comments: 'Best'
    },
    {
      ID: 2,
      Title: 'Design For Mankind',
      Description: 'Filled with beautifully-written essays on everything from design (she`s a pro) to parenting to marriage to work to travel and more.',
      Authors: ['Erin Loechner'],
      Comments: 'Amazing'
    },
    {
      ID: 3,
      Title: 'A Cup Of Jo',
      Description: 'Full of random lists, questions, product recommendations, and regular posts on everything from style, to food, design, travel, relationships and motherhood.',
      Authors: ['Joanna Goddard'],
      Comments: 'Very Good'
    }
  ];

  constructor() { }

  getBlogs() {
    return this.blogs
  }
}
