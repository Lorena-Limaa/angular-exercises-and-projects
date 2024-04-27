import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberReceived: number;
  
  receiveNumber(number: number) {
    this.numberReceived = number;
  }
}
