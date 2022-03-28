import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { Router } from '@angular/router';
import { Products } from './../../models/products.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() product: Products | undefined

  constructor(
    private router: Router,
    private productService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
  }

  cartClicked(product: any) {
    this.cartService.addToCart(product)
    // this.router.navigate(['cart'])
  }

}
