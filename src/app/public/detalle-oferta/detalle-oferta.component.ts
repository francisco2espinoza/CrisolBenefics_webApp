// detalle-oferta.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleOfertaService } from '../../services/detalle-oferta.service';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.css']
})
export class DetalleOfertaComponent implements OnInit {
  oferta: any;

  constructor(
    private detalleOfertaService: DetalleOfertaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idOferta = +this.route.snapshot.params['id_oferta']; // Asegúrate de que la ruta está configurada para usar 'id_oferta'
    this.detalleOfertaService.getOfertaPorId(idOferta).subscribe(
      data => {

        this.oferta = data;
        console.log(this.oferta); 
      },
      
      error => {
        console.error('Error al cargar los detalles de la oferta', error);
      }
    );
  }
}
