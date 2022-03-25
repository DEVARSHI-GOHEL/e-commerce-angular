import { HotToastService } from '@ngneat/hot-toast';
import { Injectable, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsCollection: AngularFirestoreCollection
  productDoc: AngularFirestoreDocument

  products: any
  product: any
  cartProducts: any

  constructor(private afs: AngularFirestore, private toast: HotToastService) {
    this.productsCollection = this.afs.collection('products');
    this.productDoc = this.afs.doc('products/1')
  }

  getProductFromId(id: any){
    // console.log(id)
    this.product = this.productDoc.valueChanges(id).subscribe(product => {
    })
  }

  getProducts() {
      return this.productsCollection.valueChanges()
  }
}
