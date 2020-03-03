import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: []
})
export class DigimonComponent implements OnInit {

  //Digimons
  Digimon:any = [];

  constructor(public APIService: DigimonService) { }

  ngOnInit() {
    // //Inicializo la funcion
    this.loadDigimons()
  }

  //Obtener listado de digimons
  loadDigimons() {
    return this.APIService.getDigimonList().subscribe((data: {}) => {
      this.Digimon = data;
    })
  }

}
