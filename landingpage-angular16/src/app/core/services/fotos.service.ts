import { Injectable } from '@angular/core';
import { foto } from '../interfaces/fotos';
import { fotos } from '../constants/fotos'; 

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor() { }

  async getAll():Promise<foto[]>{
    return fotos;

  }
}
