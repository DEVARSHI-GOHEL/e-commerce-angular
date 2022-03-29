import { Products } from 'src/app/models/products.model';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from './../../models/users.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user') || '')
  orders: any

  constructor(
    private authService: AuthenticationService,
    private firestore: AngularFirestore,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  submit(name: any, email: any, contact: any, address: any) {

    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${this.user.uid}`
    );

    this.orders = this.cartService.getCartProducts()
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();

    let userData = {
      contact: contact,
      delivery_address: address,
      username: name,
      order_email: email,
      orders: {...this.orders, date: cDate}
    }

    userRef.set(userData, {
      merge: true
    })
    
    this.cartService.clearCart()
    this.router.navigate(['home'])
  }

}
