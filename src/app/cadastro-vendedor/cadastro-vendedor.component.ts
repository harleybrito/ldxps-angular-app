import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendedoresService } from '../vendedores/vendedores.service';
import { ClientesService } from '../clientes/clientes.service';
import { EmitterService } from '../shared/emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-vendedor',
  templateUrl: './cadastro-vendedor.component.html',
  styleUrls: ['./cadastro-vendedor.component.css']
})
export class CadastroVendedorComponent implements OnInit {

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
      CDVEND: [null, Validators.required],
      DSNOME: [null, Validators.required],
      CDTAB: [null, Validators.required],
      DTNASC: [null]
    });

    if(this.emitter.dadoEditar){
      this.edicao = true;
      this.emitter.dadoEditar = false;
      this.updateForm(this.emitter.dadoVendedor);
      this.emitter.dadoVendedor = null;
    }
  }

  criarVendedor(){
    console.log(this.form.value);
    if(this.form.valid){
      this.vendedoresService.save(this.form.value, !this.edicao).subscribe(
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

  updateForm(vendedor){
    this.form.patchValue({
      CDVEND: vendedor.CDVEND,
      DSNOME: vendedor.DSNOME,
      CDTAB: vendedor.CDTAB,
      DTNASC: vendedor.DTNASC
    });
  }

  remove(){
    this.vendedoresService.remove(this.form.get('CDVEND').value).subscribe(
      res => {this.resetForm();
        this.router.navigate(['/home']);
      }
    );
  }
}
