import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroClienteDynamicComponent } from './cadastro-cliente-dynamic/cadastro-cliente-dynamic.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cadastro-cliente', component: CadastroClienteComponent},
  { path: 'cadastro-cliente-dynamic', component: CadastroClienteDynamicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
