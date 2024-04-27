import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrl: './beverages.component.css'
})
export class BeveragesComponent {
  @Input() beverage = "tea";
  @Output() newBeverageEvent = new EventEmitter<string>();

  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value);
  }

}
