import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.component.html',
  styleUrls: ['./categorias-lista.component.scss']
})
export class CategoriasListaComponent implements OnInit {

  categorias: Categoria[];
  categoriaSelecionada: Categoria;

  constructor(private categoriaService: CategoriaService,
              private router: Router) { }

  ngOnInit() {
    this.categoriaService.buscarCategorias().subscribe(categorias => {
      this.categorias = categorias;
    })
  }

  novoCadatro() {
    this.router.navigate(['/categorias/form']);
  }

  preparaDelecao(categoria: Categoria) {
    this.categoriaSelecionada = categoria;
  }

  deletarCliente() {
    this.categoriaService.removerCategoria(this.categoriaSelecionada.id).subscribe(resp => {
      Swal.fire(`Categoria deletada com sucesso.`, '', 'success');
      this.ngOnInit();
    }, errorResp => {
      Swal.fire(`Erro ao deletar a categoria: ${errorResp}.`, '', 'error');
    });
  }

}
