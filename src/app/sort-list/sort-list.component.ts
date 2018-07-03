/**
 * TODO: 
 * Need to adjust the state in SortItemComponent from the parent
 * using the button in the parent class. 
 * 
 * May need service that acts between the two. 
 * 
 */


import { 
  Component, 
  AfterViewInit,
  ViewChildren
 } from '@angular/core';

import { 
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


import { SortItemComponent } from '../sort-item/sort-item.component';
import { ArrayFillService } from '../array-fill.service';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.css'],
  animations: [
    trigger('moveLeft', [
      state('inactive', style({
        backgroundColor: '#FFF'
      })),
      state('active', style({
        backgroundColor: 'red'
      }))
    ])
  ]
})
export class SortListComponent implements AfterViewInit {
  sortItems: Array<number>;
  // state: string = 'inactive';
  @ViewChildren(SortItemComponent) childItems: SortItemComponent[];

  constructor(private arrayFillService: ArrayFillService) { }

  ngAfterViewInit() {

  }
  ngAfterContentInit() {
    this.sortItems = this.fillArray(10);
  }

  fillArray(length: number): Array<number> {
    return this.arrayFillService.randomFill(length);
  }

  sort(): void {
    console.log(SortItemComponent);
    
    // SortItemComponent.state = SortItemComponent.state === 'active' ? 'inactive' : 'active';
    // SortItemComponent.state = SortItemComponent.state === 'active' ? 'inactive' : 'active';
  }
}
