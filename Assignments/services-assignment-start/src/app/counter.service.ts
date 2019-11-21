import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;

  countOnSet() {
    this.counter ++;
    console.log(`You has been changed the users type ${this.counter} times`);
  }
}
