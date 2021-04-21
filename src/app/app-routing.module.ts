import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilleteraComponent } from './components/home/billetera/billetera.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/home/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'billetera', component: BilleteraComponent},
      {path: 'perfil', component: PerfilComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
