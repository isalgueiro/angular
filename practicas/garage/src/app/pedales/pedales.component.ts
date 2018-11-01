import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pedales',
  template: `
    <button (click)="onAcelerarClick()">Acelerar</button>
    <button (click)="frenar.emit()">Frenar</button>
  `,
  styles: []
})
export class PedalesComponent implements OnInit {

  @Output() public acelerar = new EventEmitter<void>();
  @Output() public frenar = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onAcelerarClick() {
    this.acelerar.emit();
  }

  onFrenarClick() {

  }
}
