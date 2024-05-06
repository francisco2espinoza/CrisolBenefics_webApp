import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  eventos: any[] = [];
  noData!: TemplateRef<NgIfContext<boolean>> | null;

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventoService.getListarEventos().subscribe({
      next: (eventos) => {
        console.log(eventos);  // Añadir para ver qué datos se están recibiendo
        this.eventos = eventos;
      },
      error: (error) => {
        console.error('Error al obtener eventos', error);
      }
    });
  }
}