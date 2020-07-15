import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  private vendedor;
  emitirVendedorClicado = new EventEmitter<any>();
  emitirClienteClicado = new EventEmitter<any>();
  emitirEdicao = new EventEmitter<any>();
  dadoCliente;
  dadoVendedor;
  dadoEditar = false;

  constructor() {
    console.log("Emitter");
  }

  enviar(vendedor){
    this.dadoVendedor = vendedor;
    this.emitirVendedorClicado.emit(vendedor);
  }

  cliente(cliente){
    this.dadoCliente = cliente;
    this.emitirClienteClicado.emit(cliente);
  }

  editar(opcao){
    this.dadoEditar = opcao;
    this.emitirEdicao.emit(opcao);
  }

  getVendedor(){
    return this.vendedor.asObservable();
  }

  isVendedor(){
    return this.vendedor;
  }
}
