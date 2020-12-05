import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../Satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  constructor() { }

  @Input() satellites: Satellite[];

  ngOnInit() {
  }

}