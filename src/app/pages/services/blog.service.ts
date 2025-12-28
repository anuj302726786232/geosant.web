import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Blog } from '../../core/models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [
    {
      id: 1,
      title: 'How Satellite Imagery is Transforming Agriculture',
      excerpt:
        'Discover how earth observation and NDVI analytics improve crop yield and reduce risk.',
      content: `
Satellite imagery has revolutionized modern agriculture by enabling precision
farming techniques that were impossible just a decade ago.

Using high-resolution earth observation data, farmers can now monitor crop health,
soil moisture, and vegetation indices such as NDVI and EVI across large areas.

These insights help detect early signs of stress, pest infestation, or drought,
allowing timely intervention and reducing crop losses.

Satellite-driven analytics also support yield prediction, irrigation planning,
and sustainable land management — ultimately increasing productivity while
minimizing environmental impact.
    `,
      image: 'assets/images/blogs/agriculture.jpg',
      category: 'Agriculture',
      date: 'Aug 10, 2025'
    },
    {
      id: 2,
      title: 'Smart Cities Powered by Geospatial Intelligence',
      excerpt:
        'Urban planning meets satellite data to create resilient and sustainable cities.',
      content: `
Smart cities rely on accurate, real-time data — and satellite imagery plays a
crucial role in shaping urban development strategies.

By analyzing satellite data, city planners can monitor urban expansion,
infrastructure growth, traffic density, and land-use changes over time.

Geospatial intelligence supports smarter zoning decisions, disaster preparedness,
and climate-resilient infrastructure planning.

When combined with AI and GIS platforms, satellite data enables cities to
optimize resources, improve citizen safety, and build sustainable urban ecosystems.
    `,
      image: 'assets/images/blogs/urban.jpg',
      category: 'Urban Planning',
      date: 'Aug 14, 2025'
    },
    {
      id: 3,
      title: 'Monitoring Climate Change from Space',
      excerpt:
        'How satellite sensors help track climate indicators and environmental risks.',
      content: `
Climate change is a global challenge, and satellites provide a unique vantage
point to monitor environmental changes at scale.

Earth observation satellites track key indicators such as temperature variations,
glacier retreat, sea-level rise, deforestation, and atmospheric composition.

These datasets enable scientists and policymakers to assess climate risks,
model future scenarios, and design mitigation strategies.

Satellite-based monitoring ensures transparency, accuracy, and continuous
observation — making it an essential tool in the fight against climate change.
    `,
      image: 'assets/images/blogs/climate.jpg',
      category: 'Climate',
      date: 'Aug 18, 2025'
    }
  ];


  getBlogs(): Blog[] {
    return this.blogs;
  }

  getBlogById(id: number): Blog | undefined {
    return this.blogs.find(b => b.id === id);
  }

  addBlog(blog: Blog) {
    this.blogs.unshift(blog);
  }
}
