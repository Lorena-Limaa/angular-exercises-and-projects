import { Injectable } from "@angular/core";
import { Shopping } from "./shopping.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ providedIn: 'root' }) // Injectable decorator indicates that the service should be provided in root injector
export class ShoppingCartService {
    private cart: Shopping[] = []; // Array to hold shopping cart items
    // private productAdded$ = new Subject<number>(); // Subject to notify subscribers about product addition (not used in this version)
    private productAdded$ = new BehaviorSubject<number>(0); // BehaviorSubject to emit the current number of products in the cart

    getShoppingCartQuantity() { // Method to get the shopping cart quantity as an observable
        return this.productAdded$.asObservable(); // Return productAdded$ as an observable
    }

    addProduct(product: string) { // Method to add a product to the shopping cart
        const shoppingProduct: Shopping = { // Create a shopping product object
            product: product, // Assign the product name
            id: this.cart.length + 1, // Assign an ID to the product (length of the cart array + 1)
        }

        this.cart.push(shoppingProduct); // Add the product to the cart array
        this.productAdded$.next(this.cart.length); // Emit the updated number of products in the cart using BehaviorSubject

        console.log(this.cart); // Log the updated cart array to the console
    }
}
