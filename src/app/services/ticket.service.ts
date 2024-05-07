import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class TicketService {

    private apiUrl = 'https://localhost:44309/api/ticket/listarporId?id=20';

    constructor(private http: HttpClient) {}
  
    
    getTicketPorId(): Observable<any> {
      return this.http.get<{data: any[]}>(this.apiUrl).pipe(
        map(response => response.data)); // Extrae la propiedad 'data' del objeto de respuesta
    }

  }