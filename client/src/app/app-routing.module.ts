import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent} from './components/dashboard/dashboard.component';
import { LoginFormComponent} from './components/login-form/login-form.component';
import {HomeComponent} from './components/home/home.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "user",
    component: DashboardComponent,
  },
  {
    path: "user/login",
    component: LoginFormComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
