import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AhorroService {
  private apiUrl = 'https://localhost:44309/api/Ahorro/obtenerAhorro';

  constructor(private http: HttpClient) { }

  getListarAhorro(idusuario:number ): Observable<any[]> {
    const url = `${this.apiUrl}?idUsuario=${idusuario}`;
    
    
    return this.http.get<{data: any[]}>(url).pipe(
      map(response => response.data) // Extrae la propiedad 'data' del objeto de respuesta
    );
  }
}
