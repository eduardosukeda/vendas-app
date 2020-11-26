import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ComumModule } from 'src/app/shared/modules/comum.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListaImagensComponent } from './lista-imagens/lista-imagens.component';
import { ImagemDetalhesComponent } from 'src/app/shared/componentes/imagem-detalhes/imagem-detalhes.component';



@NgModule({
  declarations: [
    ProdutosFormComponent,
    ProdutosListaComponent,
    ListaImagensComponent
  ],
  imports: [
    ComumModule,
    ReactiveFormsModule,
    ProdutosRoutingModule
  ],
  exports: [
    ProdutosFormComponent,
    ProdutosListaComponent
  ],
  entryComponents: [
    ListaImagensComponent,
    ImagemDetalhesComponent
  ]
})
export class ProdutosModule { }
