import { Products } from './../models/products.model';
import { Injectable } from '@angular/core';
import { isTemplateRef } from '@ngneat/overview';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Products[] = []
  flag: boolean | undefined;

  constructor() {
  }

  clearCart() {
    this.cartItems = []
  }

  addToCart(product: Products) {

    this.flag = true

    console.log(product['Uniq Id'])
    this.cartItems.forEach((item: Products, index) => {
      console.log(item['Uniq Id'], product['Uniq Id'])
      if (item['Uniq Id'] === product['Uniq Id']) {
        alert('here')
        this.flag = false
        this.cartItems[index].qty += 1
      }
    })
    if(this.flag){
      this.cartItems.push({...product, qty: 1})
    }

    console.log(this.cartItems)

  }

  getCartProducts() {
    return this.cartItems
  }
}