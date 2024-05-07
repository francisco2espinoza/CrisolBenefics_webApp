import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PromocionesComponent } from './public/promociones/promociones.component';
import { ExperienciasComponent } from './public/experiencias/experiencias.component';
import { LanzamientosComponent } from './public/lanzamientos/lanzamientos.component';
import { OfertasComponent } from './public/ofertas/ofertas.component';
import { DetalleOfertaComponent } from './public/detalle-oferta/detalle-oferta.component';
import { ExitoComponent } from './public/exito/exito.component';
import { TicketComponent } from './public/ticket/ticket.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: 'lanzamientos', component: LanzamientosComponent },
  { path: 'ofertas', component: OfertasComponent},
  { path: 'detalle-oferta/:id_oferta', component: DetalleOfertaComponent },
  { path: 'exito', component: ExitoComponent},
  { path: 'ticket', component: TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
