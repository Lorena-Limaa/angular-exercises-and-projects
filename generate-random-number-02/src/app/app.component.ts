import { Component } from '@angular/core';
import { RandomNumberService } from './random-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RandomNumberService]
})
export class AppComponent {
  number: number;  
  
  constructor(private randomNumberService: RandomNumberService) {}
  
  onGenerateRandomNumber() {
    this.number = this.randomNumberService.GenerateRandomNumber();
  }
}
