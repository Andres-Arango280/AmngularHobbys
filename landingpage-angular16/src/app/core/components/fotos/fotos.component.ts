import { Component, Input } from '@angular/core';
import { foto } from '../../interfaces/fotos';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent {

  @Input() fotos:foto[] = []

}
