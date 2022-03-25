import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Products } from './../models/products.model';

export interface CartState {
    cart: Products[];
    cartId: string;
}
@Injectable()
export class CartStore extends ComponentStore<CartState>{
    
    constructor(){
        super({
            cart: [],
            cartId: ''
        })
    }

    cart$: Observable<Products[]> = this.select(state => state.cart)

    cartItem$: Observable<Products[]> = this.select(({cart, cartId}) => {
        return cart.filter(item => item['Uniq Id'])
    })

}