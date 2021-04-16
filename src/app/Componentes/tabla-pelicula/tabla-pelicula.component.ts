import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula} from '../../Clases/pelicula';
import {RouterModule} from '@angular/router';
import {AppModule} from '../../app.module';
import {AppRoutingModule} from '../../app-routing.module';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listadoDePeliculas : Pelicula[];
  @Output() eventEmiterPeliculaSeleccionada : EventEmitter<any> = new EventEmitter<any>();

  // listadoDePeliculas : Pelicula[];
  constructor() { }

  SeSeleccionoUnapelicula(pelicula: Pelicula)
  {
    this.eventEmiterPeliculaSeleccionada.emit(pelicula);
  }
  ngOnInit(): void {
  }

}
