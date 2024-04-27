import { Component, OnDestroy, inject } from "@angular/core"; // Import necessary modules and inject for DI
import { ShoppingCartService } from "./shopping-cart.service";
import { Subscription } from "rxjs";
import { AsyncPipe } from "@angular/common"; // Import AsyncPipe for asynchronous data binding

@Component({
    selector: 'app-shopping-cart',
    standalone: true, // Indicates whether the component is standalone or not (not a standard Angular component property)
    imports: [AsyncPipe], // Import necessary modules
    template: `
        <span>Shopping Cart Quantity: </span> <!-- Display label -->
        <span>{{ cartQuantity$ | async }}</span> <!-- Display shopping cart quantity (using async pipe for automatic subscription handling) -->
    `
})
export class ShoppingCartComponent {
    shoppingCartService = inject(ShoppingCartService); // Inject ShoppingCartService
    cartQuantity$ = this.shoppingCartService.getShoppingCartQuantity(); // Observable to track shopping cart quantity

    // quantityProducts = 0; // Variable to hold quantity of products in the cart
    // subscription = new Subscription(); // Subscription to manage the observable subscription

    // constructor() { // Constructor function
    //     const subscriptionCounter = this.cartQuantity$ // Subscribe to cart quantity changes
    //         .subscribe(quantity => {
    //             console.log('VALUE EMITTED: ', quantity); // Log emitted value
    //             this.quantityProducts = quantity // Update quantityProducts variable with emitted value
    //         });

    //     this.subscription.add(subscriptionCounter); // Add subscription to the subscription list
    // }

    // ngOnDestroy() { // Lifecycle hook called when the component is destroyed
    //     console.log('SHOPPING CART DESTROYED!'); // Log destruction of shopping cart component
    //     this.subscription.unsubscribe(); // Unsubscribe from observable to prevent memory leaks
    // }
}
