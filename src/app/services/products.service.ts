import { Products } from 'src/app/models/products.model';
import { CartService } from './cart.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Injectable, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsCollection: AngularFirestoreCollection
  productDoc: AngularFirestoreDocument | undefined

  products: any
  product: any

  constructor(
    private afs: AngularFirestore,
    private toast: HotToastService,
    private cartService: CartService
  ) {
    this.productsCollection = this.afs.collection('products');
  }

  getProducts() {
    this.productsCollection.valueChanges().subscribe(data => {
      this.products = data
    })
    return this.productsCollection.valueChanges()
  }
}
