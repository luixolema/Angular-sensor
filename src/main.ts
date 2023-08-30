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
  styles: ['./app.css']
})
export class App {
  value = 0;

  constructor() {
    setInterval(() => {
      if (this.value < 100) {
        this.value += 10;
      } else {
        this.value = 0;
      }
    }, 2000);
  }
}

bootstrapApplication(App);
