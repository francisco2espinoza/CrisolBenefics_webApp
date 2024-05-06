
import { Component, OnInit, TemplateRef } from '@angular/core';
import { OfertasService } from '../../services/ofertas.service';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
[x: string]: any;
  ofertas: any[] = [];
  noData!: TemplateRef<NgIfContext<boolean>> | null;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getListarOfertas().subscribe({
      next: (ofertas: any[]) => {
        console.log(ofertas);  // Añadir para ver qué datos se están recibiendo
        this.ofertas = ofertas;
      },
      error: (error: any) => {
        console.error('Error al obtener eventos', error);
      }
    });
  }
}