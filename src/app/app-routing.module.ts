import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigimonComponent } from './components/digimon/digimon.component';
import { DigimonSearchComponent } from './components/digimon-search/digimon-search.component';


const routes: Routes = [
  { path: 'digimon', component: DigimonComponent },
  { path: 'digimon-search', component: DigimonSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
