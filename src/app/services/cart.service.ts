import { HotToastService } from '@ngneat/hot-toast';
import { Products } from './../models/products.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Products[] = []
  flag: boolean | undefined;
  totalPrice: number = 0

  constructor(
    private toast: HotToastService
  ) {
  }

  clearCart() {
    this.cartItems = []
  }

  addToCart(product: Products) {
    this.flag = true
    this.cartItems.forEach((item: Products, index) => {
      if (item['Uniq Id'] === product['Uniq Id']) {
        this.toast.info('Item quantity updated in cart', {duration: 2000})
        this.flag = false
        this.cartItems[index].qty += 1
      }
    })
    if (this.flag) {
      this.toast.success('New product added to cart', {duration: 2000})
      this.cartItems.push({ ...product, qty: 1 })
    }
  }

  getTotalPrice() {

    this.totalPrice = 0

    if (!this.isCartEmpty) {
      this.cartItems.map(item => {
        this.totalPrice = this.totalPrice + (item.qty * parseInt(item['Selling Price'].slice(1)))
      })
    }

    return (this.totalPrice)
  }

  removeFromCart(id: any) {
    this.cartItems.map((item, index) => {
      if (item['Uniq Id'] === id) {
        this.cartItems.splice(index, 1)
      }
    })
  }

  get isCartEmpty(): boolean {
    return this.cartItems.length === 0 ? true : false;
  }

  getCartProducts() {
    return this.cartItems
  }
}