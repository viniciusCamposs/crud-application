import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionToJavaService } from 'src/app/services/connection-to-java.service';
import { IClient } from '../IClient';



@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  clients: any;
  idClient!: number;

  client: any;
  iClient: IClient = new IClient();


  form!: FormGroup;
  submitted = false;

  message: any;
  
  constructor(
    private connection: ConnectionToJavaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      last_name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      age: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
    });

    this.getClients();
  }

  deleteClient(idClient: number){
    let resp = this.connection.deleteClient(idClient);
    resp.subscribe(data => {
      console.log(data);
    });
  }

  findClient(){
    this.iClient = new IClient;
    let resp = this.connection.getClientById(this.idClient);
    resp.subscribe((data) => {this.client = data; this.setClientValues(this.client.idClient, this.client.name, this.client.last_name, this.client.age)});
  }

  getClients(){
    let response = this.connection.getClient();
    response.subscribe((data) => this.clients = data);
  }

  private setClientValues(id:number, name: string, last_name: string, age: number){
    this.iClient.idClient = id;
    this.iClient.name = name;
    this.iClient.last_name = last_name;
    this.iClient.age = age;
  }

  updateClients(){
    this.getClients();
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

  getidClientUpdate(id: number){
    this.idClient = id;
    this.findClient();
  }

  onSubmit(){
    this.submitted = true;
    this.client = this.getFormValue();
    this.client.idClient = this.idClient;
    if(this.form.valid){
      this.updateClient();
      console.log("foi?");
    }
  }

  private updateClient(){
    let resp = this.connection.updateClient(this.client);
    resp.subscribe((data) => this.message = data);
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
  }

  private getFormValue(){
    return this.client = this.form.value;
  }



  

  

}
