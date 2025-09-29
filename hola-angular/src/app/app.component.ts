import { Component, OnInit } from '@angular/core';
import { SaludoService } from './services/saludo.service';
import { UsuarioService, Usuario } from './services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="mostrarSaludo">
      <h1>{{ mensaje }}</h1>
    </div>

    <div *ngIf="mostrarUsuarios">
      <h2>Lista de Usuarios</h2>
      <ul>
        <li *ngFor="let usuario of usuarios">
          {{ usuario.nombre }} - {{ usuario.email }}
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent implements OnInit {
  mensaje: string = '';
  usuarios: Usuario[] = [];
  mostrarSaludo: boolean = false;
  mostrarUsuarios: boolean = false;

  constructor(
    private saludoService: SaludoService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    const path = window.location.pathname;

    // Mostrar saludo solo en /saludo
    if (path === '/saludo') {
      this.mostrarSaludo = true;
      this.saludoService.getHola().subscribe({
        next: (data) => (this.mensaje = 'ANGULAR --> ' + data),
        error: () => (this.mensaje = 'ERROR: no se pudo obtener el saludo'),
      });
    }

    // Mostrar usuarios solo en /usuario
    if (path === '/usuario') {
      this.mostrarUsuarios = true;
      this.usuarioService.listarUsuarios().subscribe({
        next: (data) => (this.usuarios = data),
        error: (err) => console.error('Error al cargar usuarios', err),
      });
    }
  }
}
