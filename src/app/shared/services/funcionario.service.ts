import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';
import { Usuario } from '../models/usuario.model';

const funcionariosApi = environment.endpoints.vendas + '/api/funcionarios';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(public http: HttpClient) {}

  buscar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${funcionariosApi}` );
  }

  buscarPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${funcionariosApi}/${id}` );
  }

  salvar(formData: FormData): Observable<any> {
    return this.http.post<any>(`${funcionariosApi}`, formData);
  }

  atualizar(funcionario: Funcionario): Observable<any> {
    return this.http.put<any>(`${funcionariosApi}/${funcionario.id}`, funcionario);
  }

  remover(id: number): Observable<any> {
    return this.http.delete<any>(`${funcionariosApi}/${id}`, httpOptions);
  }

  upload(usuario: Usuario, formData: FormData): Observable<any> {
    return this.http.put(`${funcionariosApi}/${usuario.id}/foto`, formData, { responseType : 'blob'});
  }


}