import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';
import { ComumModule } from 'src/app/shared/modules/comum.module';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FuncionariosFormComponent,
    FuncionariosListaComponent
  ],
  imports: [
    ComumModule,
    ReactiveFormsModule,
    FuncionariosRoutingModule
  ],
  exports: [
    FuncionariosFormComponent,
    FuncionariosListaComponent
  ]
})
export class FuncionariosModule { }
