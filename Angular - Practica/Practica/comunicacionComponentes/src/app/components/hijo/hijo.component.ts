import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  nombreRecibido: string;
  constructor(private _servicio : ServicioService) { }

  ngOnInit(): void {
    this._servicio.evento$.subscribe(recibido=>{
      this.nombreRecibido = recibido;
    });
  }

}
