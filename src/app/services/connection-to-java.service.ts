import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionToJavaService {

  clients: any;

  constructor(
    private http: HttpClient
  ) { }

  list(){
    let response = this.http.get("http://localhost:8080/");
    return response.subscribe((data)=>this.clients = response);
  }




}
