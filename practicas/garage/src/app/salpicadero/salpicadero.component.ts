import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salpicadero',
  template: `
    <p>
      Velocidad: {{ velocidad }} Km/h
    </p>
  `,
  styles: []
})
export class SalpicaderoComponent implements OnInit {

  @Input() public velocidad = 0;
  constructor() { }

  ngOnInit() {
  }

}
