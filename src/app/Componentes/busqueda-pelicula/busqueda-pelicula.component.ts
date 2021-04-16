import { Component, OnInit } from '@angular/core';
import { Pelicula} from '../../Clases/pelicula';
import { AltaPeliculaComponent} from '../alta-pelicula/alta-pelicula.component';
@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css']
})
export class BusquedaPeliculaComponent implements OnInit {

  listadoDePeliculas : Pelicula[];
  peliculaElegida :Pelicula;

    constructor() {
      this.listadoDePeliculas =  [
        {
        id: "1", nombre:   "rapido y furioso", nose: "ni idea", fechaDeEstreno: new Date(),
        cantidadDePublico: "12",
        fotoDePelicula: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xatakandroid.com%2Flistas%2F21-consejos-imprescindibles-para-hacer-buenas-fotos-con-tu-movil-android&psig=AOvVaw2ayASFaDSKrRZM6bdejVaI&ust=1618612311493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCM_fOmgfACFQAAAAAdAAAAABAD"
        },
        {
        id: "2",
        nombre: "shrek",
        nose: "ni idea",
        fechaDeEstreno: new Date(),
        cantidadDePublico: "10",
        fotoDePelicula: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xatakandroid.com%2Flistas%2F21-consejos-imprescindibles-para-hacer-buenas-fotos-con-tu-movil-android&psig=AOvVaw2ayASFaDSKrRZM6bdejVaI&ust=1618612311493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCM_fOmgfACFQAAAAAdAAAAABAD"
        },
        {
        id: "3",
        nombre: "la rosa de guadalupe",
        nose: "ni idea",
        fechaDeEstreno: new Date(),
        cantidadDePublico: "5",
        fotoDePelicula: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xatakandroid.com%2Flistas%2F21-consejos-imprescindibles-para-hacer-buenas-fotos-con-tu-movil-android&psig=AOvVaw2ayASFaDSKrRZM6bdejVaI&ust=1618612311493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCM_fOmgfACFQAAAAAdAAAAABAD"
        }
      ]
    }


  ngOnInit(): void {
  }

  CargarPeliculaSeleccionada(pelicula: Pelicula)
  {
    this.peliculaElegida = pelicula;
  }

  CargarNuevaPelicula(pelicula : Pelicula)
  {
    this.listadoDePeliculas.push(pelicula);
  }
}
