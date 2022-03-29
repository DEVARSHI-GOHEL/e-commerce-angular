import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', Validators.required)
  })
  
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toast: HotToastService
    ) { }

  ngOnInit(): void {
  }
  
  get email(){
    return this.signupForm.get('email')
  }

  get password(){
    return this.signupForm.get('password')
  }

  get confirm_password(){
    return this.signupForm.get('confirm_password')
  }

  onLoginClicked(){
    this.router.navigate(['login'])
  }

  submit(){
    const { email, password, confirm_password } = this.signupForm.value;

    if (password !== confirm_password){
      // console.log('password', password, 'con', confirm_password)
      return alert('Passwords dont match')
    }

    this.authService.signup(email, password)
  }
}
