import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Eventos } from '../constants/eventos';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  constructor() {}

  obtenerEventos(): Observable<Evento[]> {
    return of(Eventos); 
  }
}
