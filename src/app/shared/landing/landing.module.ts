import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
