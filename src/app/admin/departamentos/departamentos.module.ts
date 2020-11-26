import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { ComumModule } from 'src/app/shared/modules/comum.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartamentosFormComponent } from './departamentos-form/departamentos-form.component';
import { DepartamentosListaComponent } from './departamentos-lista/departamentos-lista.component';
import { DepartamentosRoutingModule } from './departamentos-routing.module';
import {NgxMaskModule} from 'ngx-mask'



@NgModule({
  declarations: [
    DepartamentosFormComponent,
    DepartamentosListaComponent
  ],
  imports: [
    ComumModule,
    ReactiveFormsModule,
    SharedModule,
    DepartamentosRoutingModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    DepartamentosFormComponent,
    DepartamentosListaComponent
  ]
})
export class DepartamentosModule { }
