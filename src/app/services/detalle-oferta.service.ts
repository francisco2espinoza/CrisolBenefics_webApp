// detalle-oferta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private apiUrl1 = 'https://localhost:44309/api/ticket/Insertar';
  insertTicket( 
    Codigo_QR: string,
    
    Fecha_de_generacion: Date,
    Estado: string,
    Fecha_de_vencimiento:Date,
    Id_Oferta: number,
    Id_Usuario: number,
    Id_Evento: number

  ): Observable<any> {
    const fechaGeneracionFormateada = Fecha_de_generacion.toISOString();
    const fechaVencimientoFormateada = Fecha_de_vencimiento.toISOString();
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.apiUrl1}?codigoQR=${Codigo_QR}&Fecha_de_generacion=${fechaGeneracionFormateada}&Estado=${Estado}&Fecha_de_vencimiento=${fechaVencimientoFormateada}&Id_Oferta=${Id_Oferta}&Id_Usuario=${Id_Usuario}&Id_Evento=${Id_Evento}`;
    


    return this.http.get<{data: any[]}>(url).pipe(
      map(response => response.data));

    
  }

}
