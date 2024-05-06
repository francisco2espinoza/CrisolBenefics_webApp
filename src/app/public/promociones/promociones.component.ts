
import { Component, OnInit, TemplateRef } from '@angular/core';
//import { OfertasService } from '../../services/promociones.service';
import { promocionesService } from '../../services/promociones.service';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  ofertas: any[] = [];
  noData!: TemplateRef<NgIfContext<boolean>> | null;
promociones: any;

  constructor(private promocionesService: promocionesService) { }

  ngOnInit(): void {
    this.promocionesService.getListarOfertas().subscribe({
      next: (promociones: any[]) => {
        console.log(promociones);  // Añadir para ver qué datos se están recibiendo
        this.promociones = promociones;
      },
      error: (error: any) => {
        console.error('Error al obtener promociones', error);
      }
    });
  }
}