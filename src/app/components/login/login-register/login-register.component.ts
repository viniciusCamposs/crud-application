import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConnectionToJavaService } from 'src/app/services/connection-to-java.service';
import { Login } from '../login';
import { LoginEmail } from '../loginEmail';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  form!: FormGroup;
  login: Login = new Login();
  userLogin: any;
  showPassword: boolean = false;
  showConfPassword: boolean = false;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private connection: ConnectionToJavaService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(65)]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(65)]],
      conf_password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength]]
    })
  }

  register(){
    this.submitted = true;
    if(this.form.valid){
      this.setLoginValues();
      this.saveLogin();
    }
  }

  private setLoginValues(){
    this.login.email = this.form.controls['email'].value;
    this.login.password = this.form.controls['password'].value
  }

  private saveLogin(){
    if(this.comparePassword()){
      let resp = this.connection.saveLogin(this.login);
      resp.subscribe((data) => 
        {this.userLogin = data;
         console.log(data)
        });
    }else{
      alert('Falha ao cadastrar login!');
    }
  }

  private comparePassword(){
    if(this.form.controls['password'].value == this.form.controls['conf_password'].value){
      return true;
    }
    return false;
  }

  changePasswordType(){
    this.showPassword = !this.showPassword;
  }

  changeConfPasswordType(){
    this.showConfPassword = !this.showConfPassword;
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

}
