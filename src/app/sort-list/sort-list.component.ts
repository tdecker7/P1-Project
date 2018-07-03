import { Component, AfterViewInit, ViewChildren } from '@angular/core';

import { SortItemComponent } from '../sort-item/sort-item.component';
import { ArrayFillService } from '../array-fill.service';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.css']
})
export class SortListComponent implements AfterViewInit {
  sortItems: Array<number> = [];
  @ViewChildren(SortItemComponent) childItems: SortItemComponent[];

  constructor(private arrayFillService: ArrayFillService) { }

  ngAfterViewInit() {
    this.sortItems = this.fillArray(10);
    console.log(this.childItems);
  }

  fillArray(length: number): Array<number> {
    return this.arrayFillService.randomFill(length);
    // array = this.arrayFillService.randomFill(length);
    // return array = this.arrayFillService.randomFill(length);
    // for (let i = 0; i < length; i++) {
    //   array.push(i);
    // }
    // console.log(array);
  }

  sort(): void {
    this.childItems.forEach(item => {
      console.log(item.item);
    });
  }
}
