import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { CreateComponent } from '../signup/create/create.component';
import { OtpComponent } from '../signup/otp/otp.component';
import { PasswordComponent } from '../signup/password/password.component';
import { SignUpFormComponent } from '../signup/sign-up-form/sign-up-form.component';
import { TrackComponent } from '../signup/track/track.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingComponent,
    SignupComponent,
    SigninComponent,
    CreateComponent,
    OtpComponent,
    PasswordComponent,
    SignUpFormComponent,
    TrackComponent,],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
