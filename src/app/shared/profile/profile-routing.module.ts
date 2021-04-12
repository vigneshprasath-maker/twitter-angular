import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilemainComponent } from '../profilemain/profilemain.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
