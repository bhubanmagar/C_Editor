import { Routes } from '@angular/router';
import { CreateBinComponent } from './Components/create-bin/create-bin.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundpageComponent } from './Components/notfoundpage/notfoundpage.component';
import { SignupComponent } from './Components/signup/signup.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'create',
    component: CreateBinComponent,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Components/about/about.component').then(
        (mod) => mod.AboutComponent
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundpageComponent },
];
