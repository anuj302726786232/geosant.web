import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Blog } from '../../core/models/blog.model';
import { BlogService } from '../services/blog.service';

// interface Blog {
//   id: number;
//   title: string;
//   excerpt: string;
//   image: string;
//   category: string;
//   date: string;
// }

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService: BlogService)
  { 
    
  }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}
