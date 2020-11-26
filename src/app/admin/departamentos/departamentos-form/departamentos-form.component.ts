import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/shared/models/departamento.modelo';
import { DepartamentoService } from 'src/app/shared/services/departamento.service';
import { BaseFormComponent } from 'src/app/shared/utils/base-form/base-form';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departamentos-form',
  templateUrl: './departamentos-form.component.html',
  styleUrls: ['./departamentos-form.component.scss']
})
export class DepartamentosFormComponent extends BaseFormComponent implements OnInit {

  // form: FormGroup;
  id: number;

  constructor(private departamentoService: DepartamentoService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
                super();
               }

  ngOnInit() {
    this.configForm();

    console.log('id ao iniciar o form: ', parseInt( this.activatedRoute.snapshot.paramMap.get('id')));

    if (this.activatedRoute.snapshot.paramMap.has('id')) {

        this.id = parseInt( this.activatedRoute.snapshot.paramMap.get('id'));

        this.departamentoService.buscarPorId(this.id).subscribe(dept => {
          console.log(dept);
          this.populaDadosForm(dept);
        });
    }   
  }

  configForm() {
    this.form = this.fb.group({
      nome: [null, Validators.required],
      telefone: [null]
    });
  }

  submit() {
    console.log('form: ', this.form);
    console.log('id: ', this.id);
    
    if (this.id) {

      this.departamentoService.atualizar(this.id, this.form.value).subscribe(resp => {
        Swal.fire(`Departamento atualizado com sucesso.`, '', 'success').then( (result) => {
          this.router.navigate(['/departamentos/lista']);
        });        
      }, 
      errorResponse => {
        console.log('errorResponse: ', errorResponse);
      });

    } else {

      this.departamentoService.salvar(this.form.value).subscribe(resp => {
        Swal.fire(`Departamento salvo com sucesso.`, '', 'success').then( (result) => {
          this.resetaDadosForm();
        });        
    }, erroResp => {
      console.log('erro: ', erroResp);
    });
    }
    
  }

  populaDadosForm(dados) {
    
    this.form.patchValue({
      nome: dados.nome, 
      telefone: dados.telefone
    });
  }

  resetaDadosForm() {
    this.id = undefined;

    this.form.patchValue({
      nome: null, 
      telefone: null
    });
  }

  voltarParaListagem() {
    this.router.navigate(['/departamentos/lista']);
  }

}
