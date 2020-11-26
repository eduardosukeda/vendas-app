import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from 'src/app/shared/services/endereco.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-enderecos-lista',
  templateUrl: './enderecos-lista.component.html',
  styleUrls: ['./enderecos-lista.component.scss']
})
export class EnderecosListaComponent implements OnInit {

  enderecos: Endereco[];
  enderecoSelecionado: Endereco;

  constructor(private enderecoService: EnderecoService,
              private router: Router) { }

  ngOnInit() {
    this.enderecoService.buscar().subscribe(enderecos => {
      this.enderecos = enderecos;
    })
  }

  novoCadatro() {
    this.router.navigate(['/enderecos/form']);
  }

  preparaDelecao(endereco: Endereco) {
    this.enderecoSelecionado = endereco;
  }

  deletarEndereco() {
    this.enderecoService.remover(this.enderecoSelecionado.id).subscribe(resp => {
      Swal.fire(`Endereco deletado com sucesso.`, '', 'success');
      this.ngOnInit();
    }, errorResp => {
      Swal.fire(`Erro ao deletar o endereço.`, '', 'error');
      console.log('Erro ao deletar: ', errorResp);
    });
  }

}
