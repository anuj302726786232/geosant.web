import { Injectable } from '@angular/core';
import { NavLink } from '../models/nav-link.models'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  getNavLinks(): NavLink[] {
    return [
      { label: 'Home', path: ''},
      { label: 'Solutions', path: '/solutions' },
      { label: 'Industries', path: '/industries' },
      { label: 'Resources', path: '/blogs' },
      { label: 'About', path: '/about' },
      { label: 'Careers', path: '/careers' }
    ];
  }
}
