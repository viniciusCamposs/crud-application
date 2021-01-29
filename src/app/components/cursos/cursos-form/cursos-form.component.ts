import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionToJavaService } from 'src/app/services/connection-to-java.service';
import { Client } from '../client';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  client: Client = new Client("", "", 0);
  message: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private connection: ConnectionToJavaService
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      last_name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      age: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
    })

  }

  onSubmit(){
    this.submitted = true;
    this.client = this.getFormValue();
    if(this.form.valid){
      this.registerNow();
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

  
  private registerNow(){
    let resp = this.connection.doRegistration(this.client);
    resp.subscribe((data) => this.message = data);
  }

  private getFormValue(){
    return this.client = this.form.value;
  }

}
