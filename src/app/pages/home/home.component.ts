import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Partner, Solution, Industry, CaseStudy, Resource } from '../../core/models/home.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // @ViewChild('#heroVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  // ngAfterViewInit(): void {
  //   const video = this.bgVideo.nativeElement;

  //   video.muted = true;      // Required by browser
  //   video.currentTime = 0;  // Reset video
  //   video.play().catch(() => {
  //     // Autoplay blocked silently (mobile / low power mode)
  //     console.warn('Autoplay blocked by browser');
  //   });
  // }


  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo.nativeElement;

    video.muted = true;       // REQUIRED
    video.playsInline = true;

    video.play().catch(err => {
      console.warn('Autoplay blocked:', err);
    });
  }

  partners: Partner[] = [];
  solutions: Solution[] = [];
  industries: Industry[] = [];
  caseStudies: CaseStudy[] = [];
  resources: Resource[] = [];

  ngOnInit(): void {
    this.loadMockData();
  }

  loadMockData() {
    this.partners = [
      { name: 'Maxar', logoUrl: 'assets/images/partners/partner1.jpg' },
      { name: 'BlackSky', logoUrl: 'assets/images/partners/partner2.jpg' },
      { name: 'BlueSky', logoUrl: 'assets/images/partners/partner3.jpg' }
    ];

    this.solutions = [
      {
        id: 1,
        title: 'Earth Observation Data',
        description: 'High-resolution satellite imagery for monitoring, mapping, and strategic decision-making.',
        icon: '🛰️',
        slug: 'satellite-imagery'
      },
      {
        id: 2,
        title: 'Spatial Data Analysis',
        description: 'Transform satellite data into actionable intelligence using AI-driven analytics and insights.',
        icon: '🌍',
        slug: 'geospatial-analytics'
      },
      {
        id: 3,
        title: 'Geographic Information Systems Solutions',
        description: 'End-to-end GIS services for urban planning, infrastructure, agriculture, and resource management.',
        icon: '🧭',
        slug: 'gis-mapping-solutions'
      }
      // {
      //   id: 4,
      //   title: 'Remote Sensing Applications',
      //   description: 'Advanced monitoring of environmental changes, disasters, and natural resources using remote sensing.',
      //   icon: '🌌',
      //   slug: 'remote-sensing-applications'
      // }
    ];

    this.industries = [
      {
        name: 'Urban',
        tagline: 'Smart city insights through satellite intelligence',
        image: 'assets/images/industries/urban.jpg',
        slug: 'urban'
      },
      {
        name: 'Rail',
        tagline: 'Tracking rail networks and operations from space',
        image: 'assets/images/industries/rail.png',
        slug: 'rail'
      },
      {
        name: 'Maritime',
        tagline: 'Intelligence and connectivity across the world’s oceans',
        image: 'assets/images/industries/maritime.jpg',
        slug: 'maritime'
      },
      // {
      //   name: 'Energy & Utilities',
      //   tagline: 'Monitoring critical infrastructure from space',
      //   image: 'assets/images/industries/energy.jpg',
      //   slug: 'energy'
      // },
      {
        name: 'Agriculture',
        tagline: 'Data-driven insights for sustainable food production',
        image: 'assets/images/industries/agriculture.png',
        slug: 'agriculture'
      }
    ];

    this.caseStudies = [
      {
        summary: 'Urban expansion monitoring enabled faster infrastructure planning.',
        image: 'assets/case-study-1.jpg',
        slug: 'urban-monitoring'
      }
    ];

    this.resources = [
      {
        title: 'The Future of Geospatial Intelligence',
        excerpt: 'How satellite data is reshaping decision-making.',
        slug: 'future-geospatial'
      }
    ];
  }

}
