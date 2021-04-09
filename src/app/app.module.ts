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
import { ReactiveFormsModule } from '@angular/forms';
import { TrendingComponent } from './shared/trending/trending.component';
import { TrendingmiddleComponent } from './shared/trendingmiddle/trendingmiddle.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftsidebarComponent,
    MiddlesectionComponent,
    RightsidebarComponent,
    LoginComponent,
    TrendingComponent,
    TrendingmiddleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
