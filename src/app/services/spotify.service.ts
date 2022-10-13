import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  uri:string = 'https://api.spotify.com/v1/artists/34EP7KEpOjXcM2TCat1ISk/top-tracks?market=us'
  token:string= ' Bearer BQCqD9pBf4X_alSgn7BZNCb6g4eyvm5qS1xZl_kCqsV614qEnkhKUBjHPd2syUYsnJH15TvVAo7zdIY7oK742cbgS3u0TQF6qCIf2oyAhSBEjipBTWR1eybvr3Q9cAqQIbGHzBjaFAk7QUCmGIt8LOlwpf0sgkIXjAkk1B0lvb1Bb_CjKe3qw_8ie7HP7f_Q_OI'


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
