import {Component} from '@angular/core';
import { TopService } from '../services/top.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent {

  public respuestaServicios:any[]=[]

  constructor(public peticion:TopService) {

    //como utilizar los datos qeu legan de un servicio

    this.peticion.buscar()
    .subscribe(respuesta=>{

      this.respuestaServicios=respuesta.datos
      console.log(this.respuestaServicios)
    })
   }



}
