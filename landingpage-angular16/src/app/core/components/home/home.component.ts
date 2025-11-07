import { Component, signal } from '@angular/core';
import { FotosService } from '../../services/fotos.service';
import { foto } from '../../interfaces/fotos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fotos = signal<foto[]>([]);

  constructor(private fotosService: FotosService) {
    this.fotosService.getAll().then(res => this.fotos.set(res));
  }

}
