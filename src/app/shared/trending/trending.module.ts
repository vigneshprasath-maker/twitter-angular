import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { LeftsidebarComponent } from '../leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from '../rightsidebar/rightsidebar.component';
import { MiddlesectionComponent } from '../middlesection/middlesection.component';
import { TrendingmiddleComponent } from '../trendingmiddle/trendingmiddle.component';
import { TrendingComponent } from './trending.component';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [TrendingmiddleComponent,TrendingComponent],
  imports: [
    CommonModule,
    TrendingRoutingModule,
    DashboardModule
  ]
})
export class TrendingModule { }
