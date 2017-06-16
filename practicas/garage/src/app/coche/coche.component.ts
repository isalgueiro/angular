import { Component, OnInit } from '@angular/core';
import { CocheService } from 'app/coche.service';
import { Coche } from 'app/coche';

@Component({
  selector: 'app-coche',
  template: `
    <app-salpicadero [velocidad]="coche.velocidad" ></app-salpicadero>
    <app-pedales (acelerar)="cocheService.acelerar()" (frenar)="onFrenar()" ></app-pedales>
  `,
  styles: []
})
export class CocheComponent implements OnInit {

  public coche: Coche;

  constructor(public cocheService: CocheService) { }

  ngOnInit() {
    this.coche = this.cocheService.getCoche();
  }

  onFrenar() {
    this.cocheService.frenar();
  }
}
