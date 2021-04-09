import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LeftsidebarComponent } from '../leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from '../rightsidebar/rightsidebar.component';
import { MiddlesectionComponent } from '../middlesection/middlesection.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [MiddlesectionComponent,RightsidebarComponent,LeftsidebarComponent,DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[LeftsidebarComponent,RightsidebarComponent]
})
export class DashboardModule { }
