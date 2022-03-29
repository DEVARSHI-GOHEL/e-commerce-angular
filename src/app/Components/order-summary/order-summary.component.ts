import { Products } from 'src/app/models/products.model';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  cartItems: any | undefined;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartProducts()
  }

}
