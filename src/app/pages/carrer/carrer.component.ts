import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Job {
  title: string;
  description: string;
  department: string;
  icon: string; // SVG path or icon name
  applyLink: string;
}

@Component({
  selector: 'app-carrer',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './carrer.component.html',
  styleUrl: './carrer.component.css'
})
export class CarrerComponent {
  // Dynamic Job List
  jobs: Job[] = [
    {
      title: 'Frontend Developer',
      description: 'Work on modern Angular/React dashboards for satellite analytics.',
      department: 'Engineering',
      icon: 'frontend', // we'll map this to SVG
      applyLink: '/apply/frontend'
    },
    {
      title: 'Data Scientist',
      description: 'Analyze satellite data using AI/ML to generate actionable insights.',
      department: 'Analytics',
      icon: 'ai',
      applyLink: '/apply/datascience'
    },
    {
      title: 'Satellite Operations Engineer',
      description: 'Manage satellite telemetry and ensure accurate data capture and delivery.',
      department: 'Operations',
      icon: 'satellite',
      applyLink: '/apply/operations'
    },
    {
      title: 'Backend Developer',
      description: 'Build scalable APIs for geospatial data pipelines.',
      department: 'Engineering',
      icon: 'backend',
      applyLink: '/apply/backend'
    }
  ];

  // Optional: Map icon names to inline SVGs
  getIconSvg(icon: string): string {
    const icons: { [key: string]: string } = {
      frontend: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#22c55e" viewBox="0 0 16 16">
        <path d="M4.854 4.146a.5.5 0 0 1 0 .708L2.707 7l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0z"/>
        <path d="M11.146 4.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.708-.708L13.293 7l-2.147-2.146a.5.5 0 0 1 0-.708z"/>
      </svg>`,
      ai: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#22c55e" viewBox="0 0 16 16">
        <path d="M2 2h12v12H2V2zm1 1v10h10V3H3z"/>
        <path d="M5 5h6v6H5V5z"/>
      </svg>`,
      satellite: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#22c55e" viewBox="0 0 16 16">
        <path d="M16 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1z"/>
        <path d="M8 4a4 4 0 1 1 0 8A4 4 0 0 1 8 4z"/>
      </svg>`,
      backend: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#22c55e" viewBox="0 0 16 16">
        <path d="M5 2h6v12H5V2z"/>
        <path d="M4 1h8v14H4V1z"/>
      </svg>`
    };
    return icons[icon] || '';
  }

}
