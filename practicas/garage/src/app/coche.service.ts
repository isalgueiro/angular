import { Injectable } from '@angular/core';
import { Coche } from 'app/coche';

@Injectable()
export class CocheService {

  private coche: Coche;

  constructor() {
    this.coche = new Coche();
    this.coche.velocidad = 0;
  }

  getCoche() {
    return this.coche;
  }
  acelerar() {
    this.coche.velocidad++;
  }

  frenar() {
    this.coche.velocidad--;
  }
}
