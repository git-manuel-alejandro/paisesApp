import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service'

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']

  paises: Country[] = []
  regionActiva: string = ''

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    this.regionActiva = region
    this.paisService.getRegion(region).subscribe(paises => {
      this.paises = paises
    })

  }



}
