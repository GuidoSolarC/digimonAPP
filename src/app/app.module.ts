import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Componente de digimon
import { DigimonComponent } from './components/digimon/digimon.component';
import { HomeComponent } from './components/home/home.component';
import { DigimonSearchComponent } from './components/digimon-search/digimon-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonComponent,
    HomeComponent,
    DigimonSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
