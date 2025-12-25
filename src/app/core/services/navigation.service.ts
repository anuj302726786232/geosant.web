import { Injectable } from '@angular/core';
import { NavLink } from '../models/nav-link.models'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  getNavLinks(): NavLink[] {
    return [
      { label: 'Solutions', path: '/solutions' },
      { label: 'Industries', path: '/industries' },
      { label: 'Blogs', path: '/blogs' },
      { label: 'About', path: '/about' },
      { label: 'Careers', path: '/careers' }
    ];
  }
}
