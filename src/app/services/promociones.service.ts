import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class promocionesService {
  
  private apiUrl = 'https://localhost:44309/api/oferta/listar';

  constructor(private http: HttpClient) { }

  getListarOfertas(): Observable<any[]> {
    return this.http.get<{data: any[]}>(this.apiUrl).pipe(
      map(response => response.data) // Extrae la propiedad 'data' del objeto de respuesta
    );
  }
}