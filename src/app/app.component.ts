import { Component } from '@angular/core';
import { CartStore } from './store/cart.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartStore]
})
export class AppComponent {
  title = 'e-commerce-angular';
}
