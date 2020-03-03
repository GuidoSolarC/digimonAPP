import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Digimon } from '../interfaces/digimon';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  //API listado
  digimonListApi: any;
  //API Digimon x nombre
  digimonNameApi: any;
  //API Digimon x id
  digimonIDApi: any;
  //API Digimon x level
  digimonLevelApi: any;
  
  //Constructor
  constructor(private http: HttpClient) {
    this.digimonListApi = environment.digimonListAPI;
    this.digimonNameApi = environment.digimonNameAPI;
    this.digimonIDApi = environment.digimonIDAPI;
    this.digimonLevelApi = environment.digimonLevelAPI;
  }

  //Retorno listado de digimons
  getDigimonList(): Observable<Digimon> {
    return this.http
      .get<Digimon>(`${this.digimonListApi}`)
      .pipe(catchError(this._handleError)); //maneja el error en la respuesta
  }


  //Obtener digimon segun nombre
  getDigimonByName(name): Observable<Digimon> {
    return this.http
      .get<Digimon>(`${this.digimonNameApi}/${name}`)
      .pipe(catchError(this._handleError)); //maneja el error en la respuesta
  }

   //Obtener digimon segun nombre
   getDigimonByID(id): Observable<Digimon> {
    return this.http
      .get<Digimon>(`${this.digimonIDApi}/${id}`)
      .pipe(catchError(this._handleError)); //maneja el error en la respuesta
  }

   //Obtener digimon segun nombre
   getDigimonByLevel(level): Observable<Digimon> {
    return this.http
      .get<Digimon>(`${this.digimonLevelApi}/${level}`)
      .pipe(catchError(this._handleError)); //maneja el error en la respuesta
  }

  /**
   * Handles any request error
   */
  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
