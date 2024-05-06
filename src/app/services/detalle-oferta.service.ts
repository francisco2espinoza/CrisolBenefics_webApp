// detalle-oferta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleOfertaService {
  private apiUrl = 'https://localhost:44309/api/oferta/listarporId';

  constructor(private http: HttpClient) {}

  getOfertaPorId(idOferta: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?id=${idOferta}`);
  }
}
