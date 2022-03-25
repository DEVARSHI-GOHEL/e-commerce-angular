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

  constructor(private router: Router, private productService: ProductsService) {
  }

  ngOnInit(): void {
  }

  cartClicked(id: any){
    this.productService.getProductFromId(id)
    this.router.navigate(['cart'])
  }

}
