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

  constructor(private router: Router) {}

  agregarUsuario() {
    if (this.usuario.length >= 3 && this.usuario.length <= 8 && /^\d{4}$/.test(this.password)) {
      this.router.navigate(['/home'], {
        queryParams: {
          usuario: this.usuario,
          password: this.password,
        },
      });
    } else {
      // Mostrar mensaje de error
    }
  }
}
