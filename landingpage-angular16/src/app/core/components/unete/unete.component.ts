import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UneteService } from '../../services/unete.service';

@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.scss']
})
export class UneteComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private uneteService: UneteService) { 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      generoMusical: ['', Validators.required],
      descripcion: ['', Validators.required],
      redes: ['']
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      try {
        
        const respuesta = await this.uneteService.enviarFormulario(this.form.value);
        console.log(' Respuesta del servidor:', respuesta);

        alert(' ¡Gracias por unirte al colectivo! Pronto te contactaremos.');
        this.form.reset();
      } catch (error) {
        console.error(' Error al enviar la solicitud:', error);
        alert('Ocurrió un error al enviar tu información. Intenta nuevamente.');
      }
    } else {
      alert(' Por favor completa todos los campos requeridos.');
    }
  }
}
