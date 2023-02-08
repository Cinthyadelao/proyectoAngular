import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent {
  @Input('users') usuarios!: User[];

  @Output('userID') emitirUsuarioId: EventEmitter<number> = new EventEmitter<number>();
  /* alertar(user: User) {
     alert(user.nombre);
   }*/

  alertarIndice(indice: number) {
    alert(this.usuarios[indice].correo);
  }

  emitirUserId(usuarioId: number) {
    this.emitirUsuarioId.emit(usuarioId);
  }

}
