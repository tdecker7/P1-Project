import { Component, AfterViewInit, ViewChildren } from '@angular/core';

import { SortItemComponent } from '../sort-item/sort-item.component';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.css']
})
export class SortListComponent implements AfterViewInit {
  sortItems: Array<number> = [];
  @ViewChildren(SortItemComponent) childItems: SortItemComponent[];

  constructor() { }

  ngAfterViewInit() {
    this.fillArray(this.sortItems, 10);
    console.log(this.childItems);
  }

  fillArray(array, length): void {
    for (let i = 0; i < length; i++) {
      array.push(i);
    }
  }

  sort(): void {
    this.childItems.forEach(item => {
      console.log(item.item);
    });
  }
}
