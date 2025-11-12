import { Routes } from '@angular/router';
import { HomeComponent } from '../Features/home/home.component';
import { BuildsComponent } from '../Features/builds/builds.component';
import { ItemsComponent } from '../Features/items/items.component';
import { AboutComponent } from '../Features/about/about.component';
import { LoginComponent } from '../Core/login/login.component';
import { RegisterComponent } from '../Core/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'builds', component: BuildsComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' }
];