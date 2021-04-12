import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginComponent } from './shared/login/login.component';
import { SigninComponent } from './shared/signin/signin.component';
import { SignupComponent } from './shared/signup/signup.component';
import { TrendingComponent } from './shared/trending/trending.component';
import { TrendingModule } from './shared/trending/trending.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./shared/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./shared/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'trending',
    loadChildren: () => import('./shared/trending/trending.module').then(m => m.TrendingModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./shared/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
