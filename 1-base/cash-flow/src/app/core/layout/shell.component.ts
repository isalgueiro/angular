import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-shell',
  template: `
    <cf-top-bar></cf-top-bar>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
