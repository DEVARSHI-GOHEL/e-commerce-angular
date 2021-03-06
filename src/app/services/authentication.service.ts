import { CartService } from './cart.service';
import { User } from './../models/users.model';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { from, pipe, throwIfEmpty } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: any;
  user: any
  currentUser: any;


  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private toast: HotToastService,
    private firestore: AngularFirestore,
    private cartService: CartService
  ) { }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('user', JSON.stringify(res.user))
      this.router.navigate(['home']);
    }, err => {
      alert(err.message);
      this.router.navigate(['login']);
    })
  }

  logout() {
    this.auth.signOut().then(() => {
      localStorage.setItem('user', 'null');
      this.cartService.clearCart()
      JSON.parse(localStorage.getItem('user')!)
      this.router.navigate(['login']);
    }, err => {
      alert(err.message);
    })
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('user', JSON.stringify(res.user))
      this.router.navigate(['home']);
      this.setUserData(res.user)
    }, err => {
      alert(err.message);
      this.router.navigate(['signup']);
    })
  }

  setUserData(user: any) {
    this.user = JSON.parse(localStorage.getItem('user')!)
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email,
      username: "",
      delivery_address: "",
      contact: "",
      order_email: "",
      orders: []
    };
    return userRef.set(userData, {
      merge: true
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!)
    return user != null ? true : false
  }
}
