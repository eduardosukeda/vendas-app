import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/template/layout/layout.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';


const routes: Routes = [
  {path: 'produtos', component: LayoutComponent,
    canActivate: [AuthGuard], children: [
    
    {path: 'form', component: ProdutosFormComponent},
    {path: 'form/:id', component: ProdutosFormComponent},
    {path: 'lista', component: ProdutosListaComponent},
    {path: '', redirectTo: '/produtos/lista', pathMatch: 'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
