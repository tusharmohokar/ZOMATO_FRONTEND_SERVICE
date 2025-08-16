import { Routes } from '@angular/router';
import { LoginComponent } from './componant/login/login.component';
import { RegisterComponent } from './componant/register/register.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/login' } // fallback
];