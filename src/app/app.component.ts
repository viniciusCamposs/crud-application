import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';

  mostrarMenu: boolean = false;

  constructor(
    private authService: AuthService
  ){ }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      (mostrar: boolean) => this.mostrarMenu = mostrar
    );
  }
}
