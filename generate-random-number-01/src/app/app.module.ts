import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { RandomNumberComponent } from './random-number/random-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RandomNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
