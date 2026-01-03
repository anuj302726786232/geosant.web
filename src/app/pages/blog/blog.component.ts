import { NgFor, NgIf } from '@angular/common';
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


interface ContentItem {
  id: number | string;
  title: string;
  excerpt: string;
  date?: string; // optional for documents/case studies
  category: string;
  image?: string; // optional, you can replace with SVG later
  type: 'blog' | 'document' | 'case-study';
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {

  }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  // Active tab
  activeTab: 'blog' | 'document' | 'case-study' = 'blog';

  // All content data
  contents: ContentItem[] = [
    // Blogs
    {
      id: 1,
      title: 'Satellite Analytics Transforming Agriculture',
      excerpt: 'Learn how satellite data is revolutionizing precision farming...',
      date: 'Jan 10, 2026',
      category: 'Agriculture',
      image: 'assets/images/blogs/blogpic/agriculture.jpg',
      type: 'blog'
    },
    {
      id: 2,
      title: 'Urban Planning with Geospatial Intelligence',
      excerpt: 'Discover how cities are using geospatial insights to plan smartly...',
      date: 'Feb 5, 2026',
      category: 'Urban',
      image: 'assets/images/blogs/blogpic/urban.jpg',
      type: 'blog'
    },
    {
      id: 3,
      title: 'Satellite Analytics Advancing Climate Monitoring',
      excerpt: 'Discover how satellite data helps track climate change and environmental patterns...',
      date: 'Jan 12, 2026',
      category: 'Climate',
      image: 'assets/images/blogs/blogpic/climate.jpg',
      type: 'blog'
    },


    // Documents
    {
      id: 'doc1',
      title: 'GeoSant Whitepaper: Satellite AI',
      excerpt: 'In-depth technical documentation of AI models for satellite analytics.',
      category: 'Whitepaper',
      image: 'assets/images/blogs/documents/whitepaper.jpg',
      type: 'document'
    },
    {
      id: 'doc2',
      title: 'Environmental Monitoring Report 2025',
      excerpt: 'A comprehensive report on global vegetation and deforestation.',
      category: 'Report',
      image: 'assets/images/blogs/documents/environmental.jpg',
      type: 'document'
    },

    // Case Studies
    {
      id: 'case1',
      title: 'Case Study: Maritime Safety Monitoring',
      excerpt: 'How GeoSant helped improve maritime surveillance for a coastal nation.',
      category: 'Maritime',
      image: 'assets/images/blogs/casestudies/disaster.jpg',
      type: 'case-study'
    },
    {
      id: 'case2',
      title: 'Case Study: Disaster Management Response',
      excerpt: 'Rapid satellite intelligence for disaster response planning.',
      category: 'Disaster',
      image: 'assets/images/blogs/casestudies/maritime.jpg',
      type: 'case-study'
    }
  ];

  // Filter content based on active tab
  get filteredContents(): ContentItem[] {
    return this.contents.filter(c => c.type === this.activeTab);
  }

  // Switch tab
  setTab(tab: 'blog' | 'document' | 'case-study') {
    this.activeTab = tab;
  }
}
