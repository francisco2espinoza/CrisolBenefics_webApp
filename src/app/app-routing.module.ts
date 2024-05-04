import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PromocionesComponent } from './public/promociones/promociones.component';
import { ExperienciasComponent } from './public/experiencias/experiencias.component';
import { LanzamientosComponent } from './public/lanzamientos/lanzamientos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: 'lanzamientos', component: LanzamientosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
