import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.css']
})
export class SortListComponent implements OnInit {
  sortItems: Array<number> = [];

  constructor() { }

  ngOnInit() {
    this.fillArray(this.sortItems, 10);
    console.log(this.sortItems);
  }

  fillArray(array, length): void {
    for (let i = 0; i < length; i++) {
      array.push(i);
    }
  }
}
