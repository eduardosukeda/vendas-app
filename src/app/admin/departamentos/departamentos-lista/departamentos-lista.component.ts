import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/shared/models/departamento.modelo';
import { DepartamentoService } from 'src/app/shared/services/departamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departamentos-lista',
  templateUrl: './departamentos-lista.component.html',
  styleUrls: ['./departamentos-lista.component.scss']
})
export class DepartamentosListaComponent implements OnInit {

  departamentos: Departamento[];
  departamentoSelecionado: Departamento;
  departamentosAnteriores: Departamento[];

  constructor(private departamentoService: DepartamentoService,
              private router: Router) { }

  ngOnInit() {
    this.departamentoService.buscar().subscribe(departamentos => {
      console.log('departamentos: ', departamentos);
      this.departamentos = departamentos;
    })
  }

  novoCadatro() {
    this.router.navigate(['/departamentos/form']);
  }

  preparaDelecao(dept: Departamento) {
    this.departamentoSelecionado = dept;
  }

  deletarDepartamento() {
    this.departamentoService.remover(this.departamentoSelecionado.id).subscribe(resp => {
      Swal.fire(`Departamento deletado com sucesso.`, '', 'success');
      this.ngOnInit();
    }, errorResp => {
      Swal.fire(`Erro ao deletar o departamento.`, '', 'error');
      console.log('Erro ao deletar: ', errorResp);
    });
  }

}
