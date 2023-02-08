import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetAngular';
  tituloHeader = 'Titulo 2';

  listaUsuario: User[] = [{
    id: 1,
    nombre: 'Pedro',
    edad: 30,
    correo: 'mlkj@ljk.com',
    pasatiempos: ['correr', 'ver tele'],
    permisos: {
      mostrar: true,
      editar: false,
      eliminar: false,
    },
    nacionalidad: 'MX'
  },
  {
    id: 2,
    nombre: 'Pedra',
    edad: 31,
    correo: 'azer@ljk.com',
    pasatiempos: ['caminar', 'comer'],
    permisos: {
      mostrar: false,
      editar: true,
      eliminar: false,
    },
    nacionalidad: 'CO'
  },
  {
    id: 3,
    nombre: 'Paco',
    edad: 32,
    correo: 'xxcv@ljk.com',
    pasatiempos: ['leer', 'comer'],
    permisos: {
      mostrar: false,
      editar: false,
      eliminar: true,
    },
    nacionalidad: 'BR'
  },
  {
    id: 4,
    nombre: 'Luis',
    edad: 39,
    correo: 'nnnnnn@ljk.com',
    pasatiempos: ['cantar', 'comer'],
    permisos: {
      mostrar: false,
      editar: false,
      eliminar: true,
    },
  }
  ];

  mostrarIdSeleccionado(id: number) {
    console.log(`el id seleccionado es ${id}`);
  }

}
