import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nombreRecibido: string = "aun no cargo nombre";
  constructor(private _servicio: ServicioService) { }

  ngOnInit(): void {
    this._servicio.evento$.subscribe(recibido=>{
      this.nombreRecibido = recibido;
    });
  }

}
