import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PesquisaPostosComponent } from './pesquisa-postos/pesquisa-postos.component';
import { ListaPrecosComponent } from './lista-precos/lista-precos.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pesquisa-postos', component: PesquisaPostosComponent },
  { path: 'lista-precos', component: ListaPrecosComponent },
  { path: '', component: LoginComponent },
];
