import { Component, OnInit } from '@angular/core';
import {ServicioFirebaseService, Mascota} from '../servicio-firebase.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  mostrarEsto: string = "asdasdsad";

  mascotaNueva: Mascota = { nombre:null, apodo:null, edad: null};
  private _servicio: ServicioFirebaseService;
  constructor(servicio: ServicioFirebaseService) { 
    this._servicio = servicio;    
  }

  ngOnInit(): void {
  }

  resetForm(){
    let inputs = document.getElementsByName("inputs");
    inputs.forEach(element => {
      let elemento = <HTMLInputElement> element;
      elemento.value = null;
    });    
  }

  agregarMascota(){
    if(!this.mascotaNueva.nombre || !this.mascotaNueva.apodo || !this.mascotaNueva.edad){
      alert("No puede haber campos vacios");
    }
    else if(this.mascotaNueva.nombre.length<3 || this.mascotaNueva.apodo.length<3
      || this.mascotaNueva.edad<0 || this.mascotaNueva.edad>100){
        alert("complete los datos correctamente");
    }
    else{
      this._servicio.agregarNueva(this.mascotaNueva);
      this.resetForm();
    }
  }



}
