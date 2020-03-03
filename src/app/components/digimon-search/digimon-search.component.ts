import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';

@Component({
  selector: 'app-digimon-search',
  templateUrl: './digimon-search.component.html',
  styles: []
})

export class DigimonSearchComponent implements OnInit {

  //Digimons
  Digimon:any = [];

  constructor(public APIService: DigimonService) { }

  ngOnInit() {}

  //Obtener digimon x ID
  digimonByID(id){
    return this.APIService.getDigimonByID(id).subscribe((digimonxID:{}) => {
      this.Digimon = digimonxID;
    })
  }

  //Obtener digimon x nombre
  digimonByName(name){
    return this.APIService.getDigimonByName(name).subscribe((digimonxName:{}) => {
      this.Digimon = digimonxName;
    })
  }

  //Obtener digimon x nivel
  digimonByLevel(level){
    return this.APIService.getDigimonByLevel(level).subscribe((digimonxLevel:{}) => {
      this.Digimon = digimonxLevel;
    })
  }

}
