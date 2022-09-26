import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  uri:string = 'https://api.spotify.com/v1/artists/34EP7KEpOjXcM2TCat1ISk/top-tracks?market=us'
  token:string= 'Bearer BQDeFfcGmx9StXOnU1V8rT8RmOGdQss9OQ0uyVLErCOqVmFz-xTpMHJsFJzvXzbKqDZHH5k39VwYbZx6BvYuQpNbytw3O63o0ZSK6KXycrbiCrqrEqtrso6h-UxQnajb03SOJdYtFEOylgQXz6GpQlPxD-W6fAt-v8gHVJzyOmL18aFICNpaEtCD2V0WhswAhSs'


  constructor(public peticion :HttpClient) {

    console.log('arrancando el servicio ')
   }
   public traerCanciones():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.token
      })
    };
    return this.peticion.get(this.uri,httpOptions)
   }
}
