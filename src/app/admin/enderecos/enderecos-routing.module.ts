import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/template/layout/layout.component';
import { EnderecosFormComponent } from './enderecos-form/enderecos-form.component';
import { EnderecosListaComponent } from './enderecos-lista/enderecos-lista.component';


const routes: Routes = [
  {path: 'enderecos', component: LayoutComponent,
    canActivate: [AuthGuard], children: [
    
    {path: 'form', component: EnderecosFormComponent},
    {path: 'form/:id', component: EnderecosFormComponent},
    {path: 'lista', component: EnderecosListaComponent},
    {path: '', redirectTo: '/enderecos/lista', pathMatch: 'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecosRoutingModule { }
