import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { DashboardComponent } from './pages/view/dashboard.component';
import { LoginComponent } from './pages/view/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: '', component: AppMainComponent,
  children: [
      {path: 'dashboard', component: DashboardComponent},
      
      ]},

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
