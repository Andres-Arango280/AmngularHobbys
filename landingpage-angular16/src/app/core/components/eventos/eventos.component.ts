import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../interfaces/evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
    this.eventosService.obtenerEventos().subscribe(data => {
      this.eventos = data;
    });
  }
}
