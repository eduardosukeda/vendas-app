import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/template/layout/layout.component';
import { DepartamentosFormComponent } from './departamentos-form/departamentos-form.component';
import { DepartamentosListaComponent } from './departamentos-lista/departamentos-lista.component';


const routes: Routes = [
  {path: 'departamentos', component: LayoutComponent,
    canActivate: [AuthGuard], children: [
    
    {path: 'form', component: DepartamentosFormComponent},
    {path: 'form/:id', component: DepartamentosFormComponent},
    {path: 'lista', component: DepartamentosListaComponent},
    {path: '', redirectTo: '/departamentos/lista', pathMatch: 'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
