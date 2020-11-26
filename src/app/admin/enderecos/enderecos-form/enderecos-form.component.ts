import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from 'src/app/shared/services/endereco.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enderecos-form',
  templateUrl: './enderecos-form.component.html',
  styleUrls: ['./enderecos-form.component.scss']
})
export class EnderecosFormComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private enderecoService: EnderecoService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.configForm();

    if (this.activatedRoute.snapshot.paramMap.has('id')) {
        this.id = parseInt( this.activatedRoute.snapshot.paramMap.get('id'));
        this.enderecoService.buscarPorId(this.id).subscribe(endereco => {
          console.log(endereco);
          this.form.patchValue({rua: endereco.rua,
                                numero: endereco.numero,
                                cep: endereco.cep,
                                cidade: endereco.cidade,
                                estado: endereco.estado,
                                bairro: endereco.bairro,
                                complemento: endereco.complemento,
                                pontoReferencia: endereco.pontoReferencia,
                                telefoneEndereco: endereco.telefoneEndereco,
                                observacao: endereco.observacao,
                                nomeRecebedor: endereco.nomeRecebedor
                                });
          //this.form.setValue(cat);
        });
    }   
  }

  configForm() {
    this.form = this.fb.group({
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: [''],
      pontoReferencia: [''],
      telefoneEndereco: [''],
      observacao: [''],
      nomeRecebedor: ['']
    })
  }

  submit() {
    if (this.id) {
      const formValues = this.form.value;
      const endereco: Endereco = new Endereco();
      endereco.rua = formValues.rua;
      endereco.numero = formValues.numero;
      endereco.cep = formValues.cep;
      endereco.cidade = formValues.cidade;
      endereco.estado = formValues.estado;
      endereco.bairro = formValues.bairro;
      endereco.complemento = formValues.complemento;
      endereco.pontoReferencia = formValues.pontoReferencia;
      endereco.telefoneEndereco = formValues.telefoneEndereco;
      endereco.observacao = formValues.observacao;
      endereco.nomeRecebedor = formValues.nomeRecebedor;      
      endereco.id = this.id;

      this.enderecoService.atualizar(endereco).subscribe(resp => {
        Swal.fire(`Endereço atualizado com sucesso.`, '', 'success').then( (result) => {
          this.router.navigate(['/enderecos/lista']);
        });        
      }, errorResponse => {
        console.log('errorResponse: ', errorResponse);
      });

    } else {
      console.log(this.form.value);
      const formValues = this.form.value;
      const endereco: Endereco = new Endereco();
      endereco.rua = formValues.rua;
      endereco.numero = formValues.numero;
      endereco.cep = formValues.cep;
      endereco.cidade = formValues.cidade;
      endereco.estado = formValues.estado;
      endereco.bairro = formValues.bairro;
      endereco.complemento = formValues.complemento;
      endereco.pontoReferencia = formValues.pontoReferencia;
      endereco.telefoneEndereco = formValues.telefoneEndereco;
      endereco.observacao = formValues.observacao;
      endereco.nomeRecebedor = formValues.nomeRecebedor;

      this.enderecoService.salvar(endereco).subscribe(resp => {
        console.log('resposta do salvar endereco:', resp);
        Swal.fire(`Endereco salvo com sucesso.`, '', 'success').then( (result) => {
          this.id = undefined;
          this.ngOnInit();
        });        
    }, erroResp => {
      console.log('erro: ', erroResp);
    });
    }
    
  }

  voltarParaListagem() {
    this.router.navigate(['/enderecos/lista']);
  }

}
