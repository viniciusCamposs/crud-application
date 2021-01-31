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

  private login: Login = new Login();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.email, Validators.minLength(10), Validators.maxLength(65)]],
      password: [null, [Validators.minLength(5), Validators.maxLength(60)]]
    })
  }

  doLogin(){
    this.login = new Login();
    this.login = this.form.value;
    this.authService.login(this.login);
    console.log(this.login);
  }



}
