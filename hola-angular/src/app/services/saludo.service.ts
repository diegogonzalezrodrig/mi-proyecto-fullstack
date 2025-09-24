import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  private backendUrl = 'http://localhost:8080/saludo';

  constructor(private http: HttpClient) { }

  // backend: { "mensaje": "Hola" }
  getHola(): Observable<string> {
    // Mapeamos el objeto JSON a un string
    return this.http.get<{ helloWorld: string }>(this.backendUrl).pipe(
      map(response => response.helloWorld)
    );
  }


}
