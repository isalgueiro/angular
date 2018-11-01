import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'app/routes/operations/_data/operations.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cf-top-bar',
  template: `
    <nav>
      <a routerLink="/">->Home</a>
      <a routerLink="/operations">   ->Operations</a>
      <a routerLink="/about">   ->About</a>
    </nav>
    <div>Número de operacións: {{numOps$ | async}}</div>
  `,
  styles: []
})
export class TopBarComponent implements OnInit {

  numOps: number;
  numOps$: Observable<number>;

  constructor(private operationsService: OperationsService) { }

  ngOnInit() {
/*    this.operationsService.getOperationsCount$().subscribe(
      (numOps) => {
        this.numOps = numOps;
      }
    )*/
    this.numOps$ = this.operationsService.getOperationsCount$();
  }

}
