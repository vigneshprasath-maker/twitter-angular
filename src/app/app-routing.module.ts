import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginComponent } from './shared/login/login.component';
import { TrendingComponent } from './shared/trending/trending.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'trending',
    component:TrendingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
