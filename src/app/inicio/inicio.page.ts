import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('username')) {
        const userData = params.get('username'); // Obtén el valor del parámetro 'username'
        this.username = userData; // Asigna el valor a la propiedad 'username' de la página
      }
    });
  }
}
