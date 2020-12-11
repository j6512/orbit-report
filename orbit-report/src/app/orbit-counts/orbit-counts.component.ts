import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite'


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  categories: string[] = ['Total', 'Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];

  constructor() { }

  @Input() satellites: Satellite[];

  typeCounter(category: string): number {
    if (category === 'Total') {
      return this.satellites.length;
    }

    let count: number = 0;

    for (let i in this.satellites) {
      if (this.satellites[i].type === category) {
        count++;
      }
    }

    return count;
  }

  
  ngOnInit() {
  }

}
