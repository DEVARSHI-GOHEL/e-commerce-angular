import { HotToastService } from '@ngneat/hot-toast';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  categories: any
  productsObserve: any
  products: any
  filt: any

  cartClicked(){
    alert('Worked !!!!')
    console.log('worked')
  }

  constructor(private productServive: ProductsService, private toast: HotToastService) {
  }

  selectChangeHandler(event: any) {
    this.filt = event.target.value
  }

  ngOnInit(): void {
    this.productsObserve = this.productServive.getProducts()
      .subscribe(data => {
        this.products = data
        var groupbyCategory: any = {};
        data.filter(item => item['Category'] !== '').forEach(element => {
          let name = element['Category']
          if (!groupbyCategory[name]) {
            groupbyCategory[name] = [];
          }
          groupbyCategory[name].push(element)
        });
        this.categories = Object.keys(groupbyCategory)
      })
  }
}
