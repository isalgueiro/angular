import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extremidades',
  template: `
    <h1>
      extremidades Works!
    </h1>
    <app-brazo></app-brazo>
  `,
  styles: []
})
export class ExtremidadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
