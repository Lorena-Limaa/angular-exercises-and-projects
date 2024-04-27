import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html'
})
export class RandomNumberComponent {
  @Input() number: number;
}
