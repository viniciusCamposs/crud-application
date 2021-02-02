import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean= false;
  private login: Login = new Login();
  showPassword: boolean = false;
  

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(65)]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]]
    })
  }

  doLogin(){
    this.submitted = true;
    if(this.form.valid){
      this.login = new Login();
      this.login = this.form.value;
      this.authService.login(this.login);
      console.log(this.login);
    }else{
      alert('Formulário não está válido!');
    }
  }

  changePasswordType(){
    this.showPassword = !this.showPassword;
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }



}
