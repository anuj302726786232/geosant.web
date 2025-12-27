import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [RouterLink, NgFor ],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {

  industries = [
    {
      title: 'Agriculture & Forestry',
      description:
        'Crop health monitoring, yield prediction, soil analysis, and deforestation tracking using satellite imagery.',
      icon: 'bi bi-tree'
    },
    {
      title: 'Urban Planning & Smart Cities',
      description:
        'Land-use analysis, infrastructure planning, urban growth monitoring, and disaster preparedness.',
      icon: 'bi bi-buildings'
    },
    {
      title: 'Energy & Utilities',
      description:
        'Pipeline monitoring, solar site assessment, power line inspection, and asset risk analysis.',
      icon: 'bi bi-lightning-charge'
    },
    {
      title: 'Defense & Security',
      description:
        'Border surveillance, terrain analysis, change detection, and strategic intelligence.',
      icon: 'bi bi-shield-lock'
    },
    {
      title: 'Environmental Monitoring',
      description:
        'Climate change assessment, flood detection, wildfire tracking, and ecosystem monitoring.',
      icon: 'bi bi-globe'
    },
    {
      title: 'Mining & Infrastructure',
      description:
        'Site selection, operational monitoring, risk detection, and compliance reporting.',
      icon: 'bi bi-gem'
    }
  ];

}
