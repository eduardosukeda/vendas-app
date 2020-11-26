import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/shared/models/departamento.modelo';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { DepartamentoService } from 'src/app/shared/services/departamento.service';
import { EnderecoService } from 'src/app/shared/services/endereco.service';
import { FuncionarioService } from 'src/app/shared/services/funcionario.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.scss']
})
export class FuncionariosFormComponent implements OnInit {

  form: FormGroup;
  id: number;
  usuarios: Usuario[];
  usuarioSelecionado: string;
  departamentos: Departamento[];
  enderecos: Endereco[];
  //foto: FormData = null;
  foto: any;

  constructor(private funcionarioService: FuncionarioService,
              private usuarioService: UsuarioService,
              private departamentoService: DepartamentoService,
              private enderecoService: EnderecoService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.usuarioService.buscar().subscribe(usuarios => {
      this.usuarios = usuarios;
    });

    this.departamentoService.buscar().subscribe(depts => {
      this.departamentos = depts;
    });

    this.enderecoService.buscar().subscribe(enderecos => {
      this.enderecos = enderecos;
    });

    this.configForm();

    if (this.activatedRoute.snapshot.paramMap.has('id')) {
        this.id = parseInt( this.activatedRoute.snapshot.paramMap.get('id'));
        this.funcionarioService.buscarPorId(this.id).subscribe(func => {
          console.log(func);
          this.form.patchValue({usuario: func.usuario, 
                                departamento: func.departamento,
                                endereco: func.endereco,
                                funcao: func.funcao,
                                foto: func.foto});
          //this.form.setValue(cat);
        });
    }   
  }

  configForm() {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      departamento: ['', Validators.required],
      endereco: ['', Validators.required],
      funcao: [''],
      foto: ['']
    })
  }

  submit() {
    if (this.id) {
      const formValues = this.form.value;
      const funcionario: Funcionario = new Funcionario();
      funcionario.usuario = formValues.usuario;
      funcionario.departamento = formValues.departamento;
      funcionario.endereco = formValues.endereco;
      funcionario.funcao = formValues.funcao;
      funcionario.foto = formValues.foto;
      funcionario.id = this.id;
      
      this.funcionarioService.atualizar(funcionario).subscribe(resp => {
        Swal.fire(`Funcionario atualizado com sucesso.`, '', 'success').then( (result) => {
          this.router.navigate(['/funcionarios/lista']);
        });        
      }, errorResponse => {
        console.log('errorResponse: ', errorResponse);
      });

    } else {
      console.log(this.form.value);
      const formValues = this.form.value;      
      const funcionario: Funcionario = new Funcionario();
      funcionario.usuario = formValues.usuario;
      funcionario.departamento = formValues.departamento;
      funcionario.endereco = formValues.endereco;
      funcionario.funcao = formValues.funcao;
      funcionario.foto = null;

      const formData: FormData = new FormData();
      formData.append('funcionarioJson', JSON.stringify(funcionario));
      formData.append('foto', this.foto);

      this.funcionarioService.salvar(formData).subscribe(resp => {
        console.log('resposta do salvar func:', resp);
        Swal.fire(`Funcionario salvo com sucesso.`, '', 'success').then( (result) => {
          this.id = undefined;
          this.ngOnInit();
        });        
    }, erroResp => {
      console.log('erro: ', erroResp);
    });
    }
    
  }

  voltarParaListagem() {
    this.router.navigate(['/funcionarios/lista']);
  }

  uploadFoto(event) {
    const files = event.target.files;
    if (files) {
      this.foto = files[0];
    }
  }

  uploadFoto1(event) {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      const formData: FormData = new FormData();
      formData.append('foto', file);
      this.foto = formData;
    }
  }

  uploadFoto2(event, usuario) {
    const files = event.target.files;
    if (files) {
      const foto = files[0];
      const formData: FormData = new FormData();
      formData.append('foto', foto);
      this.funcionarioService.upload(usuario, formData).subscribe(response => {});
    }
  }

}
