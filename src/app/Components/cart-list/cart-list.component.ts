import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  @Input() cartItem: any | undefined
  subtotal: number = 0

  constructor(private cartSevice: CartService) { }

  ngOnInit(): void {
    this.subtotal = this.cartItem.qty * this.cartItem['Selling Price'].slice(1)
  }

  removeCart(product: Products){
    this.cartSevice.removeFromCart(product['Uniq Id'])
  }

}
