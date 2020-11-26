import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.scss']
})
export class CategoriasFormComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private categoriaService: CategoriaService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.configForm();
    if (this.activatedRoute.snapshot.paramMap.has('id')) {
      this.id = parseInt( this.activatedRoute.snapshot.paramMap.get('id'));
      this.categoriaService.buscarCategoriaPorId(this.id).subscribe(cat => {
        console.log(cat);
        this.form.patchValue({nome: cat.nome});
        //this.form.setValue(cat);
      });
    } else {
      console.log('erro');
    }    
  }

  configForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required]
    })
  }

  submit() {
    if (this.id) {
      const formValues = this.form.value;
      const categoria: Categoria = new Categoria(formValues.nome);
      categoria.id = this.id;
      this.categoriaService.atualizarCategoria(categoria).subscribe(resp => {
        Swal.fire(`Categoria atualizada com sucesso.`, '', 'success').then( (result) => {
          this.router.navigate(['/categorias/lista']);
        });        
      }, errorResponse => {
        console.log('errorResponse: ', errorResponse);
      });

    } else {
      console.log(this.form.value);
      const formValues = this.form.value;
      const categoria: Categoria = new Categoria(formValues.nome);

      this.categoriaService.salvarCategoria(categoria).subscribe(resp => {
        console.log('resposta do salvar categoria:', resp);
        Swal.fire(`Categoria salva com sucesso.`, '', 'success').then( (result) => {
          this.id = undefined;
          this.ngOnInit();
        });        
    });
    }
    
  }

  voltarParaListagem() {
    this.router.navigate(['/categorias/lista']);
  }

}
