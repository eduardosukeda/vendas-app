import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Categoria } from 'src/app/shared/models/categoria.model';
import { Produto } from 'src/app/shared/models/produto.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent implements OnInit {

  form: FormGroup;
  id: number;
  produtos: Produto[];
  produtoSelecionado: string;
  categorias: Categoria[];
  imagemPrincipal: any;
  maisImagens: any;
  uploadedFiles: any[] = [];

  constructor(private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoriaService.buscarCategorias().subscribe(categorias => {
      this.categorias = categorias;
    });

    this.configForm();

    if (this.activatedRoute.snapshot.paramMap.has('id')) {
      this.id = parseInt( this.activatedRoute.snapshot.paramMap.get('id'));
      this.produtoService.buscarPorId(this.id).subscribe(prod => {
        console.log(prod);
        this.form.patchValue({nome: prod.nome, 
                              descricao: prod.descricao,
                              peso: prod.peso,
                              preco: prod.preco,
                              maisVendidos: prod.maisVendidos,
                              promocao: prod.promocao,
                              quantidadeMinimaVenda: prod.quantidadeMinimaVenda,
                              quantidadeEstoque: prod.quantidadeEstoque,
                              categoria: prod.categoria,
                              imagens: prod.imagens
                            });
        //this.form.setValue(cat);
      });
    }
  }

  configForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      peso: [''],
      preco: [''],
      maisVendidos: ['', Validators.required],
      promocao: ['', Validators.required],
      quantidadeMinimaVenda: [''],
      quantidadeEstoque: ['', Validators.required],
      categoria: ['', Validators.required],
      imagemPrincipal: [''],
      maisImagens: ['']
    })
  }

  submit() {
      const formValues = this.form.value;
      const produto: Produto = new Produto();
      produto.nome = formValues.nome;
      produto.descricao = formValues.descricao;
      produto.peso = formValues.peso;
      produto.preco = formValues.preco;
      produto.maisVendidos = formValues.maisVendidos;
      produto.promocao = formValues.promocao;
      produto.quantidadeMinimaVenda = formValues.quantidadeMinimaVenda;
      produto.quantidadeEstoque = formValues.quantidadeEstoque;
      produto.categoria = formValues.categoria;
      

    if (this.id) {      
      produto.id = this.id;
      produto.imagens = formValues.imagens;

      this.produtoService.atualizar(produto).subscribe(resp => {
        Swal.fire(`Produto atualizado com sucesso.`, '', 'success').then( (result) => {
          this.router.navigate(['/produtos/lista']);
        });        
      }, errorResponse => {
        console.log('errorResponse: ', errorResponse);
      });

    } else {
      console.log(this.form.value);
      produto.imagens = null;

      this.produtoService.salvar(produto, this.imagemPrincipal, this.maisImagens).subscribe(resp => {
        console.log('resposta do salvar prod:', resp);
        Swal.fire(`Produto salvo com sucesso.`, '', 'success').then( (result) => {
          this.id = undefined;
          this.ngOnInit();
        });
      }, erroResp => {
        console.log('erro: ', erroResp);
      });
    }
    
  }

  uploadImagemPrincipal(event) {
    console.log('uploadImagemPrincipal: ', event);
    const files = event.target.files;
    if (files) {
      this.imagemPrincipal = files[0];
    }
  }

  uploadMaisImagens(event) {
    console.log('uploadMaisImagens: ', event);
    const files = event.target.files;
    if (files) {
      this.maisImagens = files;
    }
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/produtos/lista']);
  }

//TESTE
  get nome() { return this.form.get('nome').value; }
  get promocao() { return this.form.get('promocao').value; }
  get maisVendidos() { return this.form.get('maisVendidos').value; }

}
