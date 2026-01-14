export interface Partner {
  name: string;
  logoUrl: string;
}

export interface Solution {
  id: number,
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Industry {
  name: string;
  tagline: string;
  image: string;
  slug: string;
}

export interface CaseStudy {
  summary: string;
  image: string;
  slug: string;
}

export interface Resource {
  title: string;
  excerpt: string;
  slug: string;
}
