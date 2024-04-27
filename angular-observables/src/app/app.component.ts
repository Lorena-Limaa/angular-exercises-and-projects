import { Component, OnInit, inject } from '@angular/core'; // Import necessary modules and inject for DI
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet for routing
import { Observable } from 'rxjs'; // Import Observable for handling asynchronous operations
import { ShoppingCartComponent } from './shopping/shopping-cart.component'; // Import ShoppingCartComponent
import { ShoppingCartService } from './shopping/shopping-cart.service'; // Import ShoppingCartService

@Component({
  selector: 'app-root',
  standalone: true, // Indicates whether the component is standalone or not (not a standard Angular component property)
  imports: [RouterOutlet, FormsModule, ShoppingCartComponent], // Import necessary modules
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit { // Define AppComponent class and implement OnInit interface
  inputProduct = ''; // Variable to hold the value of the input field
  private shoppingCartService = inject(ShoppingCartService); // Instantiate ShoppingCartService for dependency injection

  showCounter = true; // Flag to control visibility of counter

  // BUILDING A PROMISE
  // private timer = new Promise<string>((resolver, reject) => {
  // console.log('PROMISE INITIALIZED!');

  //   setTimeout(() => {
  //     resolver('PROMISE RESOLVED')
  //   }, 5000);
  // })

  // BUILDING AN OBSERVABLE
  // private timer$ = new Observable<string>(subscriber => {
  //   console.log('OBSERVABLE INITIALIZED!');

  //   setTimeout(() => {
  //     subscriber.next('OBSERVABLE RESOLVED');
  //   }, 5000);
  // })

  ngOnInit() { // Lifecycle hook called after Angular has initialized all data-bound properties of the component
    // CALLING THE PROMISE
    // this.timer
    //   .then(value => console.log(value));

    // CALLING THE OBSERVABLE
    // this.timer$
    //   .subscribe(value => console.log(value));
  }

  addProduct() {
    // Method to add product to shopping cart
    this.shoppingCartService.addProduct(this.inputProduct); // Call addProduct method of shoppingCartService
    this.inputProduct = ''; // Clear inputProduct variable after adding product
  }
}
