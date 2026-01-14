import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  counters = {
    experience: 0,
    clients: 0,
    area: 0,
    countries: 0
  };

  private finalValues = {
    experience: 12,
    clients: 40,
    area: 120,
    countries: 15
  };

  ngOnInit(): void {
    this.animateCounter('experience');
    this.animateCounter('clients');
    this.animateCounter('area');
    this.animateCounter('countries');
  }

  animateCounter(key: keyof typeof this.counters) {
    let current = 0;
    const end = this.finalValues[key];
    const step = Math.ceil(end / 50);

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        this.counters[key] = end;
        clearInterval(timer);
      } else {
        this.counters[key] = current;
      }
    }, 30);
  }
}
