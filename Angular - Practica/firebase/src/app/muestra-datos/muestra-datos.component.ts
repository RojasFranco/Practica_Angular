import { Component, OnInit } from '@angular/core';
import {ServicioFirebaseService, Mascota} from '../servicio-firebase.service';

@Component({
  selector: 'app-muestra-datos',
  templateUrl: './muestra-datos.component.html',
  styleUrls: ['./muestra-datos.component.css']
})
export class MuestraDatosComponent implements OnInit {

  private _servicio:ServicioFirebaseService;
  misMascotas:any;
  mascotaModificar: any = {
    nombre:null,
    apodo:null,
    edad:null
  };

  constructor(servicio: ServicioFirebaseService) { 
    this._servicio = servicio;
    this._servicio.obtenerMascotas().subscribe( x =>{
      this.misMascotas = x;
    })
  }

  ngOnInit(): void {
  }

  eliminar(){
    this._servicio.eliminar(this.mascotaModificar);
  }
  
  cargaMascotaEditar(mascota: Mascota){
    this.mascotaModificar = mascota;
  }

  modificar(){
    this._servicio.modificar(this.mascotaModificar);
  }

}
