import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  evento$ = new EventEmitter<string>();
  constructor() { }
}
