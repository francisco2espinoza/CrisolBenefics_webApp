import { Component, OnInit, TemplateRef } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {
  response: any [] = [];
  noData!: TemplateRef<NgIfContext<boolean>> | null;
  ticket: any [] = [];
  constructor(
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.ticketService.getTicketPorId().subscribe( {
      
      next: (ticket) => {
        console.log(ticket);  // Añadir para ver qué datos se están recibiendo
        this.ticket = ticket;
      },
      
      error: (error) => {
        console.error('Error al obtener eventos', error);
      }
    }
    );
    
  }
}
