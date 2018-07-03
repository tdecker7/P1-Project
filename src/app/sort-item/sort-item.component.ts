import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-sort-item',
  templateUrl: './sort-item.component.html',
  styleUrls: ['./sort-item.component.css'],
  animations: [
    trigger('moveLeft', [
      state('inactive', style({
        backgroundColor: 'white'
      })),
      state('active', style({
        backgroundColor: 'red'
      }))
    ])
  ]
})
export class SortItemComponent implements OnInit {
  state: string = 'inactive';
  @Input() item: number;

  constructor() { }

  ngOnInit() {
  }

}
