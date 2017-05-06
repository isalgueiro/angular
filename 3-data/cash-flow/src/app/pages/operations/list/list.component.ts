import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-list',
  template: `
    <p>
      list Works!
    </p>
    <ul class="container">
      <cf-row *ngFor="let operation of operations" [operation]="operation" (delete)="onDelete(operation)">
      </cf-row>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  public operations;
  constructor(public operationsService: OperationsService) { }

  ngOnInit() {
    this.operations = this.operationsService.getOperations();
  }

  onDelete(operation) {
    this.operationsService.deleteOperation(operation);
    this.operations = this.operationsService.getOperations();
  }
}
