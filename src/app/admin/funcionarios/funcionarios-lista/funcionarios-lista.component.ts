import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { FuncionarioService } from 'src/app/shared/services/funcionario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionarios-lista',
  templateUrl: './funcionarios-lista.component.html',
  styleUrls: ['./funcionarios-lista.component.scss']
})
export class FuncionariosListaComponent implements OnInit {

  funcionarios: Funcionario[];
  funcionarioSelecionado: Funcionario;

  constructor(private funcionarioService: FuncionarioService,
              private router: Router) { }

  ngOnInit() {
    this.funcionarioService.buscar().subscribe(funcionarios => {
      console.log("Funcionarios: ", funcionarios);
      this.funcionarios = funcionarios;
    })
  }

  novoCadatro() {
    this.router.navigate(['/funcionarios/form']);
  }

  preparaDelecao(func: Funcionario) {
    this.funcionarioSelecionado = func;
  }

  deletarFuncionario() {
    this.funcionarioService.remover(this.funcionarioSelecionado.id).subscribe(resp => {
      Swal.fire(`Funcionario deletado com sucesso.`, '', 'success');
      this.ngOnInit();
    }, errorResp => {
      Swal.fire(`Erro ao deletar o funcionario.`, '', 'error');
      console.log('Erro ao deletar: ', errorResp);
    });
  }

  visualizarfoto(funcionario: Funcionario) {
    
  }

}
