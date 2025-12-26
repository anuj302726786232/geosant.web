import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../../core/services/navigation.service';
import { NavLink } from '../../../core/models/nav-link.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navLinks: NavLink[] = [];

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.navLinks = this.navService.getNavLinks();
  }
}
