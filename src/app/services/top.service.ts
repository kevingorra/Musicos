import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TopService {

  URL:string= 'https://servercomfama.herokuapp.com/viajescomfama/habitaciones'

  constructor(public peticionComfama:HttpClient) {

    console.log('arranque a esuchar el servicio')
   }

   buscar():Observable<any>{
    return this.peticionComfama.get(this.URL)
   }
}
