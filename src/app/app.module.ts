import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { ExperienciaComponent } from './public/experiencia/experiencia.component';
import { OfertasComponent } from './public/ofertas/ofertas.component';
import { LanzamientosComponent } from './public/lanzamientos/lanzamientos.component';
import { MisofertasComponent } from './public/misofertas/misofertas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienciaComponent,
    OfertasComponent,
    LanzamientosComponent,
    MisofertasComponent
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
