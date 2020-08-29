import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasServicioService {

  mascotas: any[] = [{
    nombre: "Milton",
    apodo: "gordototo",
    edad: 7
  },
  {
    nombre: "Ciro",
    apodo: "niggi",
    edad: 7
  },
  {
    nombre: "Nano",
    apodo: "il nene",
    edad: 7
  }
  ];

  constructor() { }

  obtenerMascotas(){
    return this.mascotas;
  }
}
