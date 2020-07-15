import { Component, OnInit } from '@angular/core';
import { VendedoresService } from './vendedores.service';
import { EmitterService } from '../shared/emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css'],
  preserveWhitespaces: false
})
export class VendedoresComponent implements OnInit {

  vendedores = [];
  vendedor = {};

  constructor(private vendedorService: VendedoresService,
    private emitter: EmitterService,
    private router: Router) { }

  ngOnInit(): void {
    this.vendedorService.list().subscribe(
      res => {this.vendedores = res},
      err => {console.log(err)}
    );

    this.emitter.emitirVendedorClicado.subscribe(
      vendedor => this.vendedor = vendedor
    );
  }

  listarClientes(vendedor){
    this.emitter.enviar(vendedor);
  }

  vendedorClicado(vendedor){
    this.emitter.enviar(vendedor);
    this.emitter.editar(true);
    this.router.navigate(['/vendedor']);
  }

}
