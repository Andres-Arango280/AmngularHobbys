import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-simple',
  templateUrl: './section-simple.component.html',
  styleUrls: ['./section-simple.component.scss']
})
export class SectionSimpleComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagen: string = '';
}
