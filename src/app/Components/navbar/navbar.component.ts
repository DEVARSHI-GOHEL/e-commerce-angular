import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }

  gotoCart() {
    this.router.navigate(['cart'])
  }

  isCartEmpty() {
    return this.cartService.isCartEmpty
  }

}
