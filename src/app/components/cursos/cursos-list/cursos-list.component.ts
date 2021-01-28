import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  clients: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(){
    let response = this.http.get("http://localhost:8080/api/clients");
    return response.subscribe((data)=>this.clients = data);
  }

}
