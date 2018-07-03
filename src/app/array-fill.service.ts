import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayFillService {

  constructor() { }

  randomFill(/*array: Array<number>, */length:number): Array<number> {
    console.log('randomFill function called in service');
    return new Array(length).fill(0).map(() => {
      return Math.floor(Math.random() * (length * 2));
    });
  }
}
