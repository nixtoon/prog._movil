import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario: string = '';
  password: string = '';

  constructor(private router: Router) { }

  enviarDatos() {

    this.router.navigate(['/home'], {
      state: {
        usuario: this.usuario,
        password: this.password
      },
    });
  }
}