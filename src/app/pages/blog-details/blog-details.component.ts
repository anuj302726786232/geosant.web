import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Blog } from '../../core/models/blog.model';
import { BlogService } from '../services/blog.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {

  blog?: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogService.getBlogById(id);
  }

}
