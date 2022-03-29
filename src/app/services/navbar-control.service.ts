import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarControlService {

  visible: boolean;

  constructor() {
    this.visible = false
  }

  showCart() {
    this.visible = true
  }

  hideCart(){
    this.visible = false
  }

}
