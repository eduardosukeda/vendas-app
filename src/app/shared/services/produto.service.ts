import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Produto } from '../models/produto.model';

const produtosApi = environment.endpoints.vendas + '/api/produtos';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(public http: HttpClient) {}

  buscar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${produtosApi}` );
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${produtosApi}/${id}` );
  }

  salvar(produto: Produto, imagemPrincipal: any, maisImagens: any): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('produtoJson', JSON.stringify(produto));
    formData.append('imagemPrincipal', imagemPrincipal);
    if(maisImagens) {
      for(let file of maisImagens){
        formData.append('maisImagens', file);
      }
    }

    console.log('produtoJson: ', JSON.stringify(produto));
    console.log('imagemPrincipal: ', imagemPrincipal);
    console.log('maisImagens: ', maisImagens);

    return this.http.post<any>(`${produtosApi}`, formData);
  }

  atualizar(produto: Produto): Observable<any> {
    return this.http.put<any>(`${produtosApi}/${produto.id}`, produto);
  }

  remover(id: number): Observable<any> {
    return this.http.delete<any>(`${produtosApi}/${id}`, httpOptions);
  }

  upload(usuario: Usuario, formData: FormData): Observable<any> {
    return this.http.put(`${produtosApi}/${usuario.id}/imagens`, formData, { responseType : 'blob'});
  }


}