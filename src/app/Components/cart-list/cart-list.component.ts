import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  @Input() cartItem: any | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
