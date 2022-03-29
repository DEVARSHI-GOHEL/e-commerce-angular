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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { HotToastModule } from '@ngneat/hot-toast';

import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LoopingRhumbusesSpinnerModule } from 'angular-epic-spinners'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './Components/cart/cart.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { CartListComponent } from './Components/cart-list/cart-list.component';
import { TotalPriceComponent } from './Components/total-price/total-price.component';
import { OrderComponent } from './Components/order/order.component';
import { OrderSummaryComponent } from './Components/order-summary/order-summary.component';
import { PaymentComponent } from './Components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProductsListComponent,
    SidebarComponent,
    CartComponent,
    LoadingComponent,
    CartListComponent,
    TotalPriceComponent,
    OrderComponent,
    OrderSummaryComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HotToastModule.forRoot(),
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    LoopingRhumbusesSpinnerModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
