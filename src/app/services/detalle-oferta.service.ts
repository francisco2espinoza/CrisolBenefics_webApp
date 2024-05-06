// detalle-oferta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleOfertaService {
  private apiUrl = 'https://localhost:44309/api/oferta/listarporId';

  constructor(private http: HttpClient) {}

  
  getOfertaPorId(idOferta: number): Observable<any> {
    
    const url = `${this.apiUrl}?id=${idOferta}`;
    
    //return this.http.get(`${this.apiUrl}?id=${idOferta}`);

    return this.http.get<{data: any[]}>(url).pipe(
      map(response => response.data)); // Extrae la propiedad 'data' del objeto de respuesta
    
  }
}
