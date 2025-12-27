import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent implements AfterViewInit {
ngAfterViewInit(): void {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true
    });
  }
}
