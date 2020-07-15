import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroVendedorComponent } from './cadastro-vendedor/cadastro-vendedor.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'vendedor', component: CadastroVendedorComponent},
  {path: 'cliente', component: CadastroClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
