import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EnderecosFormComponent } from './enderecos-form/enderecos-form.component';
import { EnderecosListaComponent } from './enderecos-lista/enderecos-lista.component';
import { EnderecosRoutingModule } from './enderecos-routing.module';
import { ComumModule } from 'src/app/shared/modules/comum.module';



@NgModule({
  declarations: [
    EnderecosFormComponent,
    EnderecosListaComponent
  ],
  imports: [
    ComumModule,
    ReactiveFormsModule,
    EnderecosRoutingModule
  ],
  exports: [
    EnderecosFormComponent,
    EnderecosListaComponent
  ]
})
export class EnderecosModule { }
