import {Component, OnInit} from '@angular/core';
import {SaludoService} from './services/saludo.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: '<h1>{{ mensaje }}</h1>',
})
export class AppComponent implements OnInit{
  mensaje: string = '';

  constructor(private saludoService : SaludoService) {}

  ngOnInit() {
    this.saludoService.getHola().subscribe({
      next: (data) => this.mensaje = 'ANGULAR --> ' + data,
      error: (err) => this.mensaje = 'ERROR'
    });

  }
}
