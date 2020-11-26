import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './template/template.module';
import { CategoriasModule } from './admin/categorias/categorias.module';
import { TokenInterceptor } from './auth/token.interceptor';
import { DepartamentosModule } from './admin/departamentos/departamentos.module';
import { EnderecosModule } from './admin/enderecos/enderecos.module';
import { FuncionariosModule } from './admin/funcionarios/funcionarios.module';
import { ProdutosModule } from './admin/produtos/produtos.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CategoriasModule,
    DepartamentosModule,
    EnderecosModule,
    FuncionariosModule,
    ProdutosModule,
    TemplateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
