import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ComumModule } from 'src/app/shared/modules/comum.module';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';


@NgModule({
  declarations: [
    CategoriasListaComponent,
    CategoriasFormComponent
  ],
  imports: [
    ComumModule,
    ReactiveFormsModule,
    CategoriasRoutingModule
  ],
  exports: [
    CategoriasListaComponent,
    CategoriasFormComponent
  ]
})
export class CategoriasModule { }
