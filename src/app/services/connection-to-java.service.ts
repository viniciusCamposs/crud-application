import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../components/cursos/client';
import { Login } from '../components/login/login';

@Injectable({
  providedIn: 'root'
})
export class ConnectionToJavaService {

  private clientUrl:string = "http://localhost:8080/api/clients/";
  private loginUrl:string = "http://localhost:8080/api/login/";

  constructor(
    private http: HttpClient
  ) { }

  /****************************** CLIENTS *********************************/

  getClient(){
    return this.http.get(this.clientUrl)
  }

  doRegistration(client: Client){
    return this.http.post(this.clientUrl, client, {responseType: 'text' as 'json'})
  }

  getClientById(idClient: number){
    return this.http.get(this.clientUrl + idClient)
  }

  deleteClient(idClient: number){
    return this.http.delete(this.clientUrl + idClient)
  }

  updateClient(client: Client){
    return this.http.put(this.clientUrl, client)
  }

  /****************************** LOGIN *********************************/

  saveLogin(login: Login){
    return this.http.post(this.loginUrl, login, {responseType: 'text' as 'json'});
  }

  getLoginByEmail(email: String){
    return this.http.get(this.loginUrl + email);
  }

}
