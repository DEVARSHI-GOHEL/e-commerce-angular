import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { NavbarControlService } from './../../services/navbar-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  cartItems: any
  price: any

  constructor(
    private navController: NavbarControlService,
    private productService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartProducts()
  }
  gotoOrder() {
    this.router.navigate(['order'])
  }

  gotoHome(){
    this.router.navigate(['home'])
  }

}
