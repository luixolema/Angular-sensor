import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


const MAX_DEGREES = 270;

@Component({
  selector: 'app-sensor',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
})
export class SensorComponent {
  @Input() min = 0;
  @Input() max = 0;
  @Input() value = 0;
  arrowDegrees = 0;

  ngOnChanges(): void {
    if (this.value < this.min || this.value > this.max) {
      throw new Error('Invalid parameters');
    }
    this.updateWidget();
  }

  ngAfterViewInit(): void {
    this.updateWidget();
  }

  private updateWidget() {
    const valuePercentageOfTotal = this.value * 100 / this.max;
    this.arrowDegrees = MAX_DEGREES * valuePercentageOfTotal / 100;
  }

}
