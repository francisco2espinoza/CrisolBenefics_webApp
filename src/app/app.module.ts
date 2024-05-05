import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { OfertasComponent } from './public/ofertas/ofertas.component';
import { LanzamientosComponent } from './public/lanzamientos/lanzamientos.component';
import { MisofertasComponent } from './public/misofertas/misofertas.component';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { ExperienciasComponent } from './public/experiencias/experiencias.component';
import { PromocionesComponent } from './public/promociones/promociones.component';
import { GridDisplayComponent } from './public/grid-display/grid-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfertasComponent,
    LanzamientosComponent,
    MisofertasComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciasComponent,
    PromocionesComponent,
    GridDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
