import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { environment } from 'src/environments/environment';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const vendas = environment.endpoints.vendas + '/api/categorias';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(public http: HttpClient) {}

  buscarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${vendas}` );
  }

  buscarCategoriaPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${vendas}/${id}` );
  }

  salvarCategoria(categoria: Categoria): Observable<any> {
    return this.http.post<any>(`${vendas}`, categoria, httpOptions);
  }

  atualizarCategoria(categoria: Categoria): Observable<any> {
    return this.http.put<any>(`${vendas}/${categoria.id}`, categoria);
  }

  removerCategoria(id: number): Observable<any> {
    return this.http.delete<any>(`${vendas}/${id}`, httpOptions);
  }


}