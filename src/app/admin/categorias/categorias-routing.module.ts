import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/template/layout/layout.component';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';


const routes: Routes = [
  {path: 'categorias', component: LayoutComponent,
    canActivate: [AuthGuard], children: [
    
    {path: 'form', component: CategoriasFormComponent},
    {path: 'form/:id', component: CategoriasFormComponent},
    {path: 'lista', component: CategoriasListaComponent},
    {path: '', redirectTo: '/categorias/lista', pathMatch: 'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
