import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroVendedorComponent } from './cadastro-vendedor/cadastro-vendedor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosClientesComponent } from './todos-clientes/todos-clientes.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VendedoresComponent,
    ClientesComponent,
    CadastroClienteComponent,
    CadastroVendedorComponent,
    TodosClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
