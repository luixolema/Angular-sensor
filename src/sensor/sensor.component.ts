import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const MAX_DEGREES = 270;

@Component({
  selector: 'app-sensor',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SensorComponent {
  @Input() min = 0;
  @Input() max = 100;
  @Input() value = 0;
  needleDegrees = 0;

  ngOnChanges(): void {
    if (this.value < this.min || this.value > this.max) {
      throw new Error(
        `Invalid parameters: ${this.min} - ${this.value} - ${this.max}`
      );
    }
    this.updateWidget();
  }

  ngAfterViewInit(): void {
    this.updateWidget();
  }

  private updateWidget() {
    const valuePercentageOfTotal = ((this.value - this.min) * 100) / (this.max - this.min);
    this.needleDegrees = (MAX_DEGREES * valuePercentageOfTotal) / 100;
  }

  get needleStyles() {
    return { transform: `rotate(${this.needleDegrees}deg)` };
  }
}
