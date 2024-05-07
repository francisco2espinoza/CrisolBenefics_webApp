// detalle-oferta.component.ts
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleOfertaService } from '../../services/detalle-oferta.service';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.css']
})
export class DetalleOfertaComponent implements OnInit {
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
/*
  // Método que se ejecuta cuando el usuario hace clic en el botón
  onBotonClick(): void {
    // Obtener los valores necesarios para llamar a getInsertarTicket
    const Id_Ticket = 1;
    const idOferta = 0; // Ajusta esto según la estructura de oferta
    const codigoQR = '2323'; // Ajusta esto según la estructura de oferta
    const fechaGeneracion = new Date(); // Ejemplo de fecha de generación actual, ajusta según lo necesario
    const estado = 'Activo'; // Ejemplo de estado, ajusta según lo necesario
    const fechaVencimiento = new Date(); // Ejemplo de fecha de vencimiento actual, ajusta según lo necesario
    fechaVencimiento.setMonth(fechaVencimiento.getMonth()+3)
    const idUsuario = 5; // Ajusta esto según la estructura de oferta
    const idEvento = 0; // Ajusta esto según la estructura de oferta

    // Llamar a getInsertarTicket del servicio
   
    this.detalleOfertaService.getInsertarTicket(
      Id_Ticket,
      codigoQR,
      fechaGeneracion,
      estado,
      fechaVencimiento,
      idOferta,  
      idUsuario,
      idEvento,
      true,
      2,
      6,
    fechaGeneracion,
    fechaGeneracion

    ).subscribe({
      next: (response) => {
        console.log(response); // Manejar la respuesta si es necesario
      },
      error: (error) => {
        console.error('Error al insertar ticket', error);
      }
    });
  }
*/
}
