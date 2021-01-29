import { Component, OnInit } from '@angular/core';
import { ConnectionToJavaService } from 'src/app/services/connection-to-java.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  clients: any;
  idClient!: number;
  
  constructor(
    private connection: ConnectionToJavaService
  ) { }

  ngOnInit(){
    this.getClients();
  }

  deleteClient(idClient: number){
    let resp = this.connection.deleteClient(idClient);
    resp.subscribe(data => {
      console.log(data);
    });
  }

  findClient(){
    let resp = this.connection.getClientById(this.idClient);
    resp.subscribe((data) => this.clients = data);

  }

  getClients(){
    let response = this.connection.getClient();
    response.subscribe((data) => this.clients = data);
  }

  

}
