import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-operations',
  template: `
    <article class="container">
      <header>
        <nav>
          <a routerLink="/operations/new">->New</a>
          <a routerLink="/operations/list">   ->List</a>
        </nav>
      </header>
      <router-outlet></router-outlet>
    </article>
  `,
  styles: []
})
export class OperationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
