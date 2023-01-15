import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Blog } from '../models/blog';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit, AfterViewInit {
  
  blogForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
     ID: [''],
     Title: [''],
     Description: [''],
     Authors:[''],
     Comments: ['']
      })
    

    }
  ngAfterViewInit(): void {
   
  }

  onSubmit = () => {
    //console.log(this.antiHeroForm.value)
    // const myAntiHero:AntiHero = this.antiHeroForm.value as AntiHero
    const myBlog:Blog= this.blogForm.getRawValue() as Blog
    console.log('myBlog', myBlog)
  }

  ngOnInit(): void {
    this.blogForm.valueChanges.subscribe(data => {
      console.log(data)
  })

  }
}