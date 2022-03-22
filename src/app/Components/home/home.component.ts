import { Products } from './../../models/products.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Auth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
