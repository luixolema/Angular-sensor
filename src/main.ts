import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SensorComponent } from './sensor/sensor.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SensorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  maxValue = 220;
  minValue = 0;
  value = 0;

  constructor() {
    setInterval(() => {
      if (this.value < this.maxValue) {
        this.value += 10;
      } else {
        this.value = this.minValue;
      }
    }, 800);
  }
}

bootstrapApplication(App);
