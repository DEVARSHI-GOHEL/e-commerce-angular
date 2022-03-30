import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  gotoHome(){
    this.cartService.clearCart()
    this.router.navigate(['home'])
  }

  logout(){
    this.auth.logout()
  }

}
