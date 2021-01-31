import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../components/cursos/client';

@Injectable({
  providedIn: 'root'
})
export class ConnectionToJavaService {

  private baseUrl:string = "http://localhost:8080/api/clients/";

  constructor(
    private http: HttpClient
  ) { }

  getClient(){
    return this.http.get(this.baseUrl)
  }

  doRegistration(client: Client){
    return this.http.post(this.baseUrl, client, {responseType: 'text' as 'json'})
  }

  getClientById(idClient: number){
    return this.http.get(this.baseUrl + idClient)
  }

  deleteClient(idClient: number){
    return this.http.delete(this.baseUrl + idClient)
  }

  updateClient(client: Client){
    return this.http.put(this.baseUrl, client)
  }

}
