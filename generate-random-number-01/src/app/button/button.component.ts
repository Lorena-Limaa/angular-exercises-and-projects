import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Output() numberGenerated = new EventEmitter<number>();

  onGenerateRandomNumber() {
    this.numberGenerated.emit(Math.floor(Math.random() * 100) + 1);
  }

}
