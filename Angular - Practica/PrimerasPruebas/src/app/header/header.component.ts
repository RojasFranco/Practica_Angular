import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  variablePrueba: boolean = true;
  activar : string;
  nombreIngresado: string;
  //constructor() { }

  animales: Array<any> = [
    {
      tipo : "perro",
      nombre : "Milton"
    },
    {
      tipo : "perro",
      nombre : "Ciro"
    },
    {
      tipo : "gato",
      nombre : "Elmo"
    },
    {
      tipo : "gato",
      nombre : "Bomba"      
    },
    {
      tipo : "perro",
      nombre : "Nano"
    }
  ]

  cursos : string[] = ["C#", "Angular", "CSS", "JS"];
}
