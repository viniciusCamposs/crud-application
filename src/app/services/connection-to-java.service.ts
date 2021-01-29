import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../components/cursos/client';

@Injectable({
  providedIn: 'root'
})
export class ConnectionToJavaService {

  constructor(
    private http: HttpClient
  ) { }

  getClient(){
    return this.http.get("http://localhost:8080/api/clients")
  }

  doRegistration(client: Client){
    return this.http.post("http://localhost:8080/api/clients", client, {responseType: 'text' as 'json'})
  }

  getClientById(idClient: number){
    return this.http.get("http://localhost:8080/api/clients/" + idClient)
  }

  deleteClient(idClient: number){
    return this.http.delete("http://localhost:8080/api/clients/" + idClient)
  }

}
