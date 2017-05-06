import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-new',
  template: `
    <p>
      new Works!
    </p>
    <form class="container">
      <label for="amount">Amount</label>
      <input  name="amount" [(ngModel)]="operation.amount" type="number"/>
      <button (click)="saveOperation()">Save</button>
    </form>
  `,
  styles: []
})
export class NewComponent implements OnInit {
  public operation: any;
  constructor(public operationsService: OperationsService) { }

  ngOnInit() {
    this.operation = {
      amount: 0
    }
  }

  saveOperation() {
    this.operationsService.saveOperation(this.operation);
  }

}
