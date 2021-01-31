import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../components/login/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(login: Login){
    if(login.email === 'usuario@email.com' && login.password === '123456'){

      this.auth = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/cursos']);
    }else{
      this.auth = false;

      this.showMenuEmitter.emit(false);

    }
  }

  authUser(){
    return this.auth;
  }

}
