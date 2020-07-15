import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendedoresService } from '../vendedores/vendedores.service';
import { ClientesService } from '../clientes/clientes.service';
import { EmitterService } from '../shared/emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  form: FormGroup;
  vendedores = [];
  criado = null;
  edicao = false;

  constructor(private formBuilder: FormBuilder,
    private vendedoresService: VendedoresService,
    private clientesService: ClientesService,
    private emitter: EmitterService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      CDCL: [null, Validators.required],
      DSNOME: [null, Validators.required],
      IDTIPO: ['PF', Validators.required],
      CDVEND: [null],
      DSLIM: [null, Validators.required]
    });

    this.vendedoresService.list().subscribe(
      res => {this.vendedores = res}
    );

    if(this.emitter.dadoEditar){
      this.edicao = true;
      this.emitter.dadoEditar = false;
      this.updateForm(this.emitter.dadoCliente);
      this.emitter.dadoCliente = null;
    }

  }

  criarCliente(){
    console.log(this.form.value);
    if(this.form.valid){
      this.clientesService.save(this.form.value, !this.edicao).subscribe(
        res => {this.criado = true; this.resetForm(); this.router.navigate(['/home']);},
        err => this.criado = false
      );
    }else{
      console.log(this.form.errors);
      this.form.markAllAsTouched();
    }
    
  }

  public valid(field) {
    return this.form.get(field).valid;
  }

  public touched(field) {
    return this.form.get(field).touched;
  }

  public applyError(field) {
    return {
      'is-invalid': !this.valid(field) && this.touched(field),
    }
  }

  resetForm() {
    this.form.reset();
  }

  updateForm(cliente){
    this.form.patchValue({
      CDCL: cliente.CDCL,
      DSNOME: cliente['DSNOME'],
      IDTIPO: cliente['IDTIPO'],
      CDVEND: cliente['CDVEND'],
      DSLIM: cliente['DSLIM']
    });
  }

  remove(){
    this.clientesService.remove(this.form.get('CDCL').value).subscribe(
      res => {this.resetForm();
        this.router.navigate(['/home']);
      }
    );
  }

}
