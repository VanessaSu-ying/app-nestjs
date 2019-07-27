import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent} from './components/dashboard/dashboard.component';
import { LoginFormComponent} from './components/login-form/login-form.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "user/id",
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
