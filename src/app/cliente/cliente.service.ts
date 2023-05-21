import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = `${environment.API_JSON_SERVER}clientes`;

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<Cliente[]>(this.API);
  }

  getCliente(id: string) {
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }

  deleteCliente(id: string) {
    return this.http.delete<string>(`${this.API}/${id}`);
  }
  
}
