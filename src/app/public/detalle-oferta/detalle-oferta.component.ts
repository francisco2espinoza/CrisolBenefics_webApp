// detalle-oferta.component.ts
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleOfertaService } from '../../services/detalle-oferta.service';
import { NgIfContext } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.css']
})
export class DetalleOfertaComponent implements OnInit {
  @ViewChild('miDiv') miDiv!: ElementRef;
  oferta: any [] = [];
  response: any [] = [];
  noData!: TemplateRef<NgIfContext<boolean>> | null;
  constructor(
    private detalleOfertaService: DetalleOfertaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idOferta = +this.route.snapshot.params['id_oferta']; // Asegúrate de que la ruta está configurada para usar 'id_oferta'
    this.detalleOfertaService.getOfertaPorId(idOferta).subscribe( {
      
      next: (oferta) => {
        console.log(oferta);  // Añadir para ver qué datos se están recibiendo
        this.oferta = oferta;
      },
      
      error: (error) => {
        console.error('Error al obtener eventos', error);
      }
    }
    );
    
  }
  onClickInsertTicket(): void {
    const contenido: string = this.miDiv.nativeElement.innerText;
    const codigoQR = contenido;
    const fechaGeneracion = new Date(); // Fecha actual
    const Fecha_de_vencimiento = new Date(); // Fecha actua
    Fecha_de_vencimiento.setMonth(Fecha_de_vencimiento.getMonth() + 3);
    const Estado= 'Activo';
    const Id_Oferta = 123;
    const Id_Usuario= 20;
    const Id_Evento = 789;
this.detalleOfertaService.insertTicket(
  codigoQR,fechaGeneracion,Estado,Fecha_de_vencimiento,Id_Oferta,Id_Usuario,Id_Evento
).subscribe({
  next: (response) => {
    // Manejar la respuesta aquí
    console.log('Ticket insertado correctamente', response);
  
  },
  error: (error) => {
    // Manejar errores aquí
    console.error('Error al insertar ticket', error);
   }
    });
  }
}
