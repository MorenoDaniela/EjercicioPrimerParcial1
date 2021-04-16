import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaPeliculaComponent } from './Componentes/busqueda-pelicula/busqueda-pelicula.component';
import { TablaPeliculaComponent } from './Componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './Componentes/detalle-pelicula/detalle-pelicula.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { AltaPeliculaComponent } from './Componentes/alta-pelicula/alta-pelicula.component';

const  routes:  Routes  = [
  {
  path:  '',
  component:  AppComponent,

  children: [
      // [...]
      { path: 'busquedapelicula',component:  BusquedaPeliculaComponent},
      { path:  'tablapelicula', component:  TablaPeliculaComponent },
      { path:  'detallepelicula', component:  DetallePeliculaComponent },
      { path:  'bienvenido', component:  BienvenidoComponent },
      { path:  'altapelicula', component:  AltaPeliculaComponent },
  ]
  }
  ];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],exports: [
    RouterModule
]
})
export class AppRoutingModule { }
