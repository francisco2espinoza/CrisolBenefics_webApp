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
/*
  private apiUrl1 = 'https://localhost:44309/api/ticket/Insertar';
  getInsertarTicket(
    Id_Ticket: number,
    Codigo_QR: string,
    Fecha_de_generacion: Date,
    Estado: string,
    Fecha_de_vencimiento: Date,
    Id_Oferta: number,
    Id_Usuario: number,
    Id_Evento: number,
    Activo: boolean,
    UsuarioCrea: number,
    UsuarioModifica: number,
    FechaCrea: Date,
    FechaModifica: Date

  ): Observable<any[]> {

      const url = `${this.apiUrl1}?Id_Ticket=${Id_Ticket}&Codigo_QR=${Codigo_QR}&Fecha_de_generacion=${Fecha_de_generacion.toISOString()}&Estado=${Estado}&Fecha_de_vencimiento=${Fecha_de_vencimiento.toISOString()}&Id_Oferta=${Id_Oferta}&Id_Usuario=${Id_Usuario}&Id_Evento=${Id_Evento}&Activo=${Activo}&UsuarioCrea=${UsuarioCrea}&UsuarioModifica=${UsuarioModifica}&FechaCrea=${FechaCrea.toISOString()}&FechaModifica=${FechaModifica.toISOString()}`;

    return this.http.get<{data: any[]}>(this.apiUrl).pipe(
      map(response => response.data) // Extrae la propiedad 'data' del objeto de respuesta
    );
  }
  */
}
