import { UnauthGuard } from './guards/unauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login', component: LoginComponent,
    canActivate: [UnauthGuard]
  },
  { path: 'signup', component: SignupComponent, canActivate: [UnauthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
