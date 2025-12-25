import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { CarrerComponent } from './pages/carrer/carrer.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blogs', component: BlogComponent },
    { path: 'industries', component: IndustriesComponent },
    { path: 'solutions', component: SolutionsComponent },
    { path: 'careers', component: CarrerComponent },
    { path: 'contacts', component: ContactComponent}
];
