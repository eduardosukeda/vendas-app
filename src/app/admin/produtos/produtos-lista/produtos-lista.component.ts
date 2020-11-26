import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/components/dynamicdialog/dynamicdialog-ref';
import { Produto } from 'src/app/shared/models/produto.model';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import Swal from 'sweetalert2';
import { ListaImagensComponent } from '../lista-imagens/lista-imagens.component';
import { DialogService } from 'primeng/api';
import { ImagemDetalhesComponent } from 'src/app/shared/componentes/imagem-detalhes/imagem-detalhes.component';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss'],
  providers: [DialogService]
})
export class ProdutosListaComponent implements OnInit {

  produtos: Produto[];
  produtoSelecionado: Produto;

  ref: DynamicDialogRef;

  constructor(private produtoService: ProdutoService,
              private router: Router,
              private dialogService: DialogService) { }

  ngOnInit() {
    this.produtoService.buscar().subscribe(produtos => {
      console.log("Produtos - ProdutosLista: ", produtos);
      this.produtos = produtos;
      console.log('this.produtos: ', produtos);
    });
  }

  novoCadatro() {
    this.router.navigate(['/produtos/form']);
  }

  preparaDelecao(prod: Produto) {
    this.produtoSelecionado = prod;
  }

  deletarProduto() {
    this.produtoService.remover(this.produtoSelecionado.id).subscribe(resp => {
      Swal.fire(`Produto deletado com sucesso.`, '', 'success');
      this.ngOnInit();
    }, errorResp => {
      Swal.fire(`Erro ao deletar o produto.`, '', 'error');
      console.log('Erro ao deletar: ', errorResp);
    });
  }

  visualizarfoto(produto: Produto) {
  }

  mostrarListaImagens(produto: Produto) {
    this.ref = this.dialogService.open(ListaImagensComponent, {
      data: {
        imagens: produto.imagens.slice(1, produto.imagens.length)
      },
      header: 'Lista Mais Imagens',
      width: '50%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((lista) =>{
        if (lista) {
          console.log('Lista imagens recebida após close tabela: ', lista);
          let count = 1;
          let listaTemp = produto.imagens[0];
            for(let img of lista) {
              img.ordem = count;
              listaTemp.push(img);
              count++;
            }
            produto.imagens.concat(listaTemp);
            this.produtoService.atualizar(produto).subscribe(resp => {
              Swal.fire(`A ordem das imagens foram salvas com sucesso.`, '', 'success').then( (result) => {
                this.router.navigate(['/produtos/lista']);
              });        
            }, errorResponse => {
              console.log('errorResponse: ', errorResponse);
            });
        }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }

  abrirDetalhesImagem(imagem) {
    this.ref = this.dialogService.open(ImagemDetalhesComponent, {
      data: {
        imagem: imagem
      },
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe(() =>{});
  }

}
