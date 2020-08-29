import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  nombreCargado: string;
  constructor(private _servicio: ServicioService) { }

  ngOnInit(): void {
  }

  cargarNombre(){
    this._servicio.evento$.emit(this.nombreCargado);
  }

}
