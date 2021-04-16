import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './Componentes/busqueda-pelicula/busqueda-pelicula.component';
import { TablaPeliculaComponent } from './Componentes/tabla-pelicula/tabla-pelicula.component';
import { RouterModule } from '@angular/router';
import { DetallePeliculaComponent } from './Componentes/detalle-pelicula/detalle-pelicula.component';
import { AppRoutingModule } from './app-routing.module';
import {AltaPeliculaComponent} from './Componentes/alta-pelicula/alta-pelicula.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaPeliculaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
