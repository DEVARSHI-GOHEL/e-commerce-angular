import { CartStore } from './../../store/cart.store';
import { ProductsService } from './../../services/products.service';
import { NavbarControlService } from './../../services/navbar-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(
    private navController: NavbarControlService,
    private productService: ProductsService,
    private cartStore: CartStore
  ) { }

  ngOnInit(): void {
  }

  getCartProduct() {
    console.log(this.cartStore.cartItem$)

  }

}
