import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  navLinks = [
    { label: 'Home', path: '' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Industries', path: '/industries' },
    { label: 'Resources', path: '/blogs' },
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '/careers' }
  ];
}
