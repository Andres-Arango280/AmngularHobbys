import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class UneteService {
  private API_URL = 'http://localhost:3000/api/unete';

  async enviarFormulario(data: any) {
    try {
      const res = await axios.post(this.API_URL, data);
      return res.data;
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      throw error;
    }
  }
}
