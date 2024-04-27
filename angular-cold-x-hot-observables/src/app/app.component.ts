import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

export interface Product {
  title: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);

  cold$ = new Observable<number>((subscriber) => {
    const randomNumber = Math.round(Math.random() * 100);
    console.log('EXECUTED', randomNumber);
    subscriber.next(randomNumber);
  });

  hot$ = new BehaviorSubject<number>(0);

  product$ = this.http
    .get<Product>('https://dummyjson.com/products/1')
    .pipe(shareReplay());

  ngOnInit() {
    // this.cold$
    //   .subscribe(value => console.log('SUB 1', value));

    // this.cold$
    //   .subscribe(value => console.log('SUB 2', value));

    // this.hot$
    //   .subscribe(value => console.log('SUB1', value));

    // this.hot$
    //   .subscribe(value => console.log('SUB1', value));

    // setTimeout(() => {
    //   this.hot$
    //     .next(Math.round(Math.random() * 100));
    // }, 5000);

    this.product$
      .subscribe(value => console.log('SUB 1', value.title));

    this.product$
      .subscribe(value => console.log('SUB 2', value.title));
  }
}
