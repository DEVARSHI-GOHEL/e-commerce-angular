import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authState } from 'rxfire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth)

  constructor(private auth: Auth) { }

  login(email: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }

  logout(){
    return from(this.auth.signOut())
  }

  signup(email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password))
  }
}
