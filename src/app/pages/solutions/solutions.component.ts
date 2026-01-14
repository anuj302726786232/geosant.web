import { NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

export interface SolutionCard {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  slug: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {

  solutionCards: SolutionCard[] = [
  {
    id: 1,
    title: 'Earth Observation Data',
    description:
      'Detailed satellite images used for monitoring, mapping, and making smart decisions.',
    image: 'assets/images/solutions/satelliteimagery.jpg',
    alt: 'Satellite Imagery',
    slug: 'satellite-imagery'
  },
  {
    id: 2,
    title: 'Spatial Data Analysis',
    description:
      'Convert satellite data into actionable insights through AI-based analytics and reporting.',
    image: 'assets/images/solutions/geospatialanalytics.jpg',
    alt: 'Geospatial Analytics',
    slug: 'geospatial-analytics'
  },
  {
    id: 3,
    title: 'Geographic Information Systems Solutions',
    description:
      'End-to-end GIS services for urban planning, agriculture, infrastructure, and resource management.',
    image: 'assets/images/solutions/gismapping.jpg',
    alt: 'GIS Mapping Solutions',
    slug: 'gis-mapping-solutions'
  },
  {
    id: 4,
    title: 'Remote Sensing Technologies',
    description:
      'Advanced monitoring solutions for environmental change, disaster management, and resource planning.',
    image: 'assets/images/solutions/remotesensing.jpg',
    alt: 'Remote Sensing Applications',
    slug: 'remote-sensing-applications'
  },
  {
    id: 5,
    title: 'Tailored Solutions & Consulting Services',
    description:
      'Tailored geospatial solutions, integration services, and consulting designed for enterprise needs.',
    image: 'assets/images/solutions/customprojects.jpg',
    alt: 'Custom Geospatial Consulting',
    slug: 'custom-projects-consulting'
  }
];


  trackById(index: number, item: SolutionCard): number {
    return item.id;
  }

}
