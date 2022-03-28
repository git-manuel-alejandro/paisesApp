import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []
  lengthPaises: number = 0
  paiseSugerido: Country[] = []

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false
    this.termino = termino
    this.paisService.buscarPais(termino).subscribe((paises) => {
      this.paises = paises
      this.lengthPaises = this.paises.length



      console.log(this.paises)

    }, (err) => {
      this.paises = []
      this.hayError = true
      console.log('error')
      console.log(err.status)

    })
  }


  sugerencias(termino: string) {
    this.hayError = false
    this.paisService.buscarPais(termino).subscribe(paises => this.paiseSugerido = paises.splice(0, 5),
      (err) => this.paiseSugerido = []
    )

  }

}
