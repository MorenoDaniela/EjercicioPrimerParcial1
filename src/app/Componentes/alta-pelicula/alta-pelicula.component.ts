import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/Clases/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {


  peliculaNueva : Pelicula;
  @Output() EventoCreacionNuevaPelicula: EventEmitter <any> = new EventEmitter <any>();
  constructor() { }

  ngOnInit(): void {
  }


  HacerNuevaPelicula()
  {
   this.peliculaNueva = new Pelicula();
  }
  GuardarNuevaPelicula(){

    this.EventoCreacionNuevaPelicula.emit(this.peliculaNueva);
    this.peliculaNueva = null;

  }
}
