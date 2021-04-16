import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/Clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

@Input() peliculaParaMostrar: Pelicula;

  constructor() {
    this.peliculaParaMostrar = new Pelicula();
    this.peliculaParaMostrar.nombre = "algo para testear";
  }

  ngOnInit(): void {
  }

}
