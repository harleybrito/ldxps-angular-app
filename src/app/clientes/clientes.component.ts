import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';
import { emit } from 'process';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [];
  vendedor;
  clicado = false;
  emitter$;

  constructor(private emitter: EmitterService,
    private clienteService: ClientesService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    if(this.router.url === "/vendedor"){
      this.listarAll();
    }
    this.emitter.emitirVendedorClicado.subscribe(
      vendedor => {this.listar(vendedor); this.vendedor = vendedor; this.clicado = true}
    );

    
  }

  listar(vendedor){
    this.clienteService.loadByCDVEND(vendedor['CDVEND']).subscribe(
      res => {this.clientes = res},
      err => {console.log(err)}
    );
  }

  listarAll(){
    this.clienteService.list().subscribe(
      res => {this.clientes = res},
      err => {console.log(err)}
    );
  }

  clienteClicado(cliente){
    this.emitter.cliente(cliente);
    this.emitter.editar(true);
    this.router.navigate(['/cliente']);
  }

}
