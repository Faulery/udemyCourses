import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  interval;
  increment = 0;

  @Output() emittedNumber = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  startEmit() {
    this.interval = setInterval(() => {
      this.emittedNumber.emit(this.increment + 1);
      this.increment++;
    }, 1000);
  }

  stopEmit() {
    clearInterval(this.interval);
  }
}
