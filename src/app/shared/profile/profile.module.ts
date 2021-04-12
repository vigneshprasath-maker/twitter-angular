import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilemainComponent } from '../profilemain/profilemain.component';
import { ProfileComponent } from './profile.component';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [ProfilemainComponent,ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    DashboardModule
  ],
})
export class ProfileModule { }
