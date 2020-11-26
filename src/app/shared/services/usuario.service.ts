import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { environment } from 'src/environments/environment';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const api = environment.endpoints.vendas + '/api/usuarios';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) {}

  salvarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${api}`, usuario);
  }

  buscar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${api}` );
  }

  /*

  buscarUsuarios(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${api}` );
  }

  buscarCategoriaPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${api}/${id}` );
  }

  salvarCategoria(categoria: Categoria): Observable<any> {
    return this.http.post<any>(`${api}`, categoria, httpOptions);
  }

  atualizarCategoria(categoria: Categoria): Observable<any> {
    return this.http.put<any>(`${vendas}/${categoria.id}`, categoria);
  }

  removerCategoria(id: number): Observable<any> {
    return this.http.delete<any>(`${vendas}/${id}`, httpOptions);
  }
  */

}