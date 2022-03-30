import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { Products } from 'src/app/models/products.model';
import { AuthenticationService } from './services/authentication.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { CartListComponent } from './Components/cart-list/cart-list.component';
import { TotalPriceComponent } from './Components/total-price/total-price.component';
import { OrderComponent } from './Components/order/order.component';
import { OrderSummaryComponent } from './Components/order-summary/order-summary.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { SuccessPageComponent } from './Components/success-page/success-page.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment';

import { HotToastModule } from '@ngneat/hot-toast';

import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProductsListComponent,
    CartComponent,
    LoadingComponent,
    CartListComponent,
    TotalPriceComponent,
    OrderComponent,
    OrderSummaryComponent,
    PaymentComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HotToastModule.forRoot(),
    MdbValidationModule,
    Ng2SearchPipeModule,
    MdbCollapseModule
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
