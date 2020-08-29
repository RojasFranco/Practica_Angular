import { Component, OnInit } from '@angular/core';
import { MascotasServicioService } from '../mascotas-servicio.service';

@Component({
  selector: 'app-datos-servicio',
  templateUrl: './datos-servicio.component.html',
  styleUrls: ['./datos-servicio.component.css']
})
export class DatosServicioComponent implements OnInit {

  mascotasRecibidas : any[] = [];
  constructor(private _servicio: MascotasServicioService) {
    this.mascotasRecibidas = _servicio.obtenerMascotas();
   }

  ngOnInit(): void {
  }

}
