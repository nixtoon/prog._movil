import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  password: string = '';

  constructor(private route: ActivatedRoute) {
    const state = this.route.snapshot.paramMap.get('state');
    if (state){
      const data = JSON.parse(state);
      this.usuario = data.usuario;
      this.password = data.password;
    }
  }
  }

