import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-operations',
  template: `
    <nav>
      <a routerLink="new">->New</a>
      <a routerLink="list">->List</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class OperationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
