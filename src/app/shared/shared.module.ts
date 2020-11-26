import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ComumModule } from './modules/comum.module';
import { ImagensVizualizadorComponent } from './componentes/imagens-vizualizador/imagens-vizualizador.component';
import { ImagemDetalhesComponent } from './componentes/imagem-detalhes/imagem-detalhes.component';
import { ErroMsgComponent } from './utils/erro-msg/erro-msg.component';


@NgModule({
  declarations: [
    ImagensVizualizadorComponent,
    ImagemDetalhesComponent,
    ErroMsgComponent
  ],
  imports: [
    ComumModule,
    ReactiveFormsModule
  ],
  exports: [
    ErroMsgComponent
  ]
})
export class SharedModule { }
