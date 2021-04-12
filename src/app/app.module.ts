import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LeftsidebarComponent } from './shared/leftsidebar/leftsidebar.component';
import { MiddlesectionComponent } from './shared/middlesection/middlesection.component';
import { RightsidebarComponent } from './shared/rightsidebar/rightsidebar.component';
import { LoginComponent } from './shared/login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrendingComponent } from './shared/trending/trending.component';
import { TrendingmiddleComponent } from './shared/trendingmiddle/trendingmiddle.component';
import { DashboardModule } from './shared/dashboard/dashboard.module';
import { TrendingModule } from './shared/trending/trending.module';
import { SigninComponent } from './shared/signin/signin.component';
import { SignupComponent } from './shared/signup/signup.component';
import { CreateComponent } from './shared/signup/create/create.component';
import { OtpComponent } from './shared/signup/otp/otp.component';
import { PasswordComponent } from './shared/signup/password/password.component';
import { SignUpFormComponent } from './shared/signup/sign-up-form/sign-up-form.component';
import { TrackComponent } from './shared/signup/track/track.component';
import { LandingComponent } from './shared/landing/landing.component';
import { LandingModule } from './shared/landing/landing.module';
import { ProfileModule } from './shared/profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DashboardModule,
    TrendingModule,
    ReactiveFormsModule,
    LandingModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
