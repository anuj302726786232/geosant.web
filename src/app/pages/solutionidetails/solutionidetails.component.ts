import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

export interface SolutionDetail {
  slug: string;
  title: string;
  intro: string;
  content: string;
  useCases: string[];

  // NEW
  image?: string;
  features?: string[];
  technology?: string;
}

@Component({
  selector: 'app-solutionidetails',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, RouterLink],
  templateUrl: './solutionidetails.component.html',
  styleUrl: './solutionidetails.component.css'
})
export class SolutionidetailsComponent implements OnInit {

  solution?: any;
  activeTab: 'overview' | 'features' | 'usecases' | 'technology' = 'overview';
  currentSlide = 0; // current image index for slider

  // activeTab: 'overview' | 'usecases' | 'technology' = 'overview';

  // solution: any;

  // 🔥 All explanations stored here
  private solutionDetails = [

    /* =========================
       SATELLITE IMAGERY
       ========================= */
    {
      slug: 'satellite-imagery',
      title: 'Earth Observation Data',
      intro: 'High-resolution satellite imagery for monitoring, mapping, and strategic decision-making.',
      image: 'assets/images/solutions/satelliteimagery.jpg',
      images: [
        'assets/images/solutionsdetails/satellite1.jpg',
        'assets/images/solutionsdetails/satellite2.jpg',
        'assets/images/solutionsdetails/satellite3.jpg'
      ],
      content: `
    Geosant provides advanced satellite imagery solutions that help organizations observe, 
    monitor, and analyze the Earth accurately. We offer access to high-quality satellite images 
    from around the world, including both real-time tasking and historical data. Our imagery supports 
    key activities such as infrastructure planning, environmental monitoring, agriculture, urban growth, 
    and disaster response. Using strong image processing and enhancement methods, raw satellite data is 
    converted into ready-to-use outputs that work smoothly with GIS and geospatial analysis tools.
     These solutions help organizations make better, faster, and more informed decisions using reliable
      satellite information.
    `,
      features: [
        'High-resolution optical imagery',
        'SAR imagery for all-weather monitoring',
        'Frequent revisit and global coverage',
        'Historical and near real-time data access'
      ],
      useCases: [
        'Infrastructure monitoring',
        'Land-use mapping',
        'Disaster assessment',
        'Environmental monitoring'
      ],
      technology: `
    Powered by multi-sensor satellite constellations
    integrated with cloud-based delivery and processing
    platforms for scalable data access.
    `
    },

    /* =========================
       GEOSPATIAL ANALYTICS
       ========================= */
    {
      slug: 'geospatial-analytics',
      title: 'Spatial Data Analysis',
      intro: 'Transform satellite data into actionable intelligence using AI-driven analytics.',
      image: 'assets/images/solutions/geospatialanalytics.jpg',
      images: [
        'assets/images/solutionsdetails/geo1.jpg',
        'assets/images/solutionsdetails/geo2.jpg',
        'assets/images/solutionsdetails/geo3.jpg'
      ],
      content: `
    Geosant’s geospatial analytics solutions turn complex spatial data into clear, actionable insights. 
    By combining satellite imagery, GIS layers, and location intelligence, Geosant enables advanced spatial 
    analysis, predictive modeling, and geospatial computations. We bring together data from multiple sources to 
    improve accuracy and context. Interactive dashboards and visual analytics tools allow users to track trends,
     assess risks, and optimize operations in real time. These analytics solutions support strategic planning, 
     infrastructure monitoring, resource management, and environmental assessment, helping organizations make 
     smarter, data-driven decisions for large-scale and enterprise-level geospatial projects.
    `,
      features: [
        'AI & ML-based spatial analysis',
        'Automated change detection',
        'Time-series analytics',
        'Custom dashboards and reports'
      ],
      useCases: [
        'Risk assessment',
        'Urban expansion analysis',
        'Asset monitoring',
        'Trend and anomaly detection'
      ],
      technology: `
    Uses AI/ML models, cloud-native geospatial processing,
    and scalable analytics pipelines for high-performance
    spatial intelligence.
    `
    },

    /* =========================
       GIS MAPPING SOLUTIONS
       ========================= */
    {
      slug: 'gis-mapping-solutions',
      title: 'Geographic Information Systems Solutions',
      intro: 'Comprehensive GIS services for planning, analysis, and visualization.',
      image: 'assets/images/solutions/gismapping.jpg',
      images: [
        'assets/images/solutionsdetails/gis1.jpg',
        'assets/images/solutionsdetails/gis2.jpg',
        'assets/images/solutionsdetails/gis3.jpg'
      ],
      content: `
    Geosant provides complete GIS mapping solutions designed for accuracy, scalability, and enterprise use. 
    Our services include precise mapping, enterprise GIS setup, spatial data management, and web GIS platform 
    development. We help organizations organize, manage, and analyze spatial data efficiently while ensuring 
    secure access and collaboration. Advanced tools support asset management, site analysis, and infrastructure 
    planning. Whether using centralized GIS systems or cloud-based web GIS platforms, our solutions enable smooth 
    integration, better workflows, and reliable location-based insights for governments, enterprises, and 
    infrastructure projects.
    `,
      features: [
        'Custom GIS application development',
        'Spatial database design',
        'Interactive web mapping',
        'Layer-based visualization'
      ],
      useCases: [
        'Urban and regional planning',
        'Agriculture and land management',
        'Infrastructure development',
        'Resource allocation'
      ],
      technology: `
    Built using modern GIS platforms, spatial databases,
    and web-based mapping frameworks for seamless
    integration and scalability.
    `
    },

    /* =========================
       REMOTE SENSING APPLICATIONS
       ========================= */
    {
      slug: 'remote-sensing-applications',
      title: 'Remote Sensing Technologies',
      intro: 'Advanced monitoring solutions using satellite and airborne remote sensing.',
      image: 'assets/images/solutions/remotesensing.jpg',
      images: [
        'assets/images/solutionsdetails/remote1.jpg',
        'assets/images/solutionsdetails/remote2.jpg',
        'assets/images/solutionsdetails/remote3.jpg'
      ],
      content: `
    Geosant’s remote sensing solutions provide powerful insights using satellite-based Earth observation data. 
    We support agriculture monitoring, change detection, environmental tracking, and disaster assessment through 
    advanced remote sensing methods. By using multiple types of satellite data—like optical, radar, and thermal 
    images—we ensure accurate analysis in all conditions. Our solutions help organizations monitor land use, 
    evaluate environmental impacts, manage natural resources, and respond quickly to disasters. Designed for
     sustainability, risk management, and long-term planning, Geosant’s remote sensing tools serve agriculture, 
     environment, infrastructure, and public sector projects.
    `,
      features: [
        'Multi-spectral and hyperspectral analysis',
        'Environmental change monitoring',
        'Disaster impact assessment',
        'Time-series observation'
      ],
      useCases: [
        'Climate monitoring',
        'Flood and wildfire assessment',
        'Deforestation tracking',
        'Water resource analysis'
      ],
      technology: `
    Integrates multi-sensor remote sensing data with
    advanced analytics and cloud-based processing
    for continuous monitoring.
    `
    },

    /* =========================
       CUSTOM PROJECTS / CONSULTING
       ========================= */
    {
      slug: 'custom-projects-consulting',
      title: 'Tailored Solutions & Consulting Services',
      intro: 'Tailored geospatial solutions and consulting for enterprise-specific needs.',
      image: 'assets/images/solutions/customprojects.jpg',
      images: [
        'assets/images/solutionsdetails/custom1.jpg',
        'assets/images/solutionsdetails/custom2.jpg',
        'assets/images/solutionsdetails/custom3.jpg'
      ],
      content: `
    Geosant specializes in delivering custom geospatial projects designed for the 
    unique needs of businesses and specific industries. We provide complete solutions, 
    from data collection and custom processing to analysis, visualization, and deployment. 
    Our scalable approach ensures that solutions can grow as data and operational needs increase. 
    With expertise across multiple industries and dedicated technical support, we deliver reliable, 
    future-ready geospatial systems. These custom solutions help organizations solve complex problems, 
    improve workflows, and make the most of geospatial intelligence for smarter decision-making.
    `,
      features: [
        'Custom solution architecture',
        'System integration services',
        'Enterprise GIS consulting',
        'Scalable deployment strategies'
      ],
      useCases: [
        'Enterprise geospatial platforms',
        'Data integration projects',
        'Workflow automation',
        'Strategic advisory services'
      ],
      technology: `
    Combines geospatial best practices, modern cloud
    infrastructure, and enterprise-grade architectures
    to deliver scalable solutions.
    `
    }

  ];


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.solution = this.solutionDetails.find(s => s.slug === slug);
  }

  setTab(tab: any) {
    this.activeTab = tab;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    const carousel = document.getElementById('solutionCarousel');
    if (carousel) {
      const carouselInstance = (window as any).bootstrap.Carousel.getInstance(carousel);
      if (carouselInstance) {
        carouselInstance.to(index);
      }
    }
  }
}
