import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento.modelo';

const departamentosApi = environment.endpoints.vendas + '/api/departamentos';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(public http: HttpClient) {}

  buscar(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${departamentosApi}` );
  }

  buscarPorId(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${departamentosApi}/${id}` );
  }

  salvar(departamento: Departamento): Observable<any> {
    return this.http.post<any>(`${departamentosApi}`, departamento, httpOptions);
  }

  atualizar(id: number, departamento: Departamento): Observable<any> {
    return this.http.put<any>(`${departamentosApi}/${id}`, departamento);
  }

  remover(id: number): Observable<any> {
    return this.http.delete<any>(`${departamentosApi}/${id}`, httpOptions);
  }


}