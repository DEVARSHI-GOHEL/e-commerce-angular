import { OrderSummaryComponent } from './../order-summary/order-summary.component';
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
  currentUser: any;
  orders: any
  userRef: any;

  constructor(
    private authService: AuthenticationService,
    private firestore: AngularFirestore,
    private router: Router,
    private cartService: CartService
  ) {
    this.userRef = this.firestore.doc(
      `users/${this.user.uid}`
    )

    this.userRef.valueChanges().subscribe((user: any) => {
      this.currentUser = user
    })
    this.orders = this.cartService.getCartProducts()
  }

  ngOnInit(): void {
  }

  isValid(name: any, email: any, contact: any, address: any) {
    if (name === "" || email === "" || contact === "" || address === "") {
      alert("Fields with (*) are required")
      return false
    }
    return true
  }

  submit(name: any, email: any, contact: any, address: any) {

    if (this.isValid(name, email, contact, address)) {
      let userData = {
        contact: contact,
        delivery_address: address,
        username: name,
        order_email: email,
        orders: [...this.currentUser.orders, { ...this.orders }]
      }

      this.userRef.update(userData)

      this.router.navigate(['successful'])

    }
  }
}