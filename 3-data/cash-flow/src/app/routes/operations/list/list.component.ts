import { Operation } from './../data/operation.model';
import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-list',
  template: `
    <p>
      list Works!
    </p>
    <div *ngIf="operations.length == 0 ">
      empty list 
    </div>
    <div *ngIf="operations.length > 0 "
      [ngClass]="{'small-list':operations.length<=3, 'large-list':operations.length>3}">
      {{ operations | json }}
    </div>
    <div *ngFor="let o of operations">
      {{ o | json }}
    </div>
    <ul class="container">
      <cf-row 
        *ngFor="let operation of operations" 
        [operation]="operation" 
        (delete)="onDelete(operation)">
      </cf-row>
    </ul>
  `,
  styles: [`
    .small-list {color: green;}
    .large-list {color: red;}
  `]
})
export class ListComponent implements OnInit {
  public operations: Operation[];
  constructor(public operationsService: OperationsService) { }

  ngOnInit() {
    this.getOperationList();
  }

  getOperationList() {
    this.operations = this.operationsService.getOperations();
  }

  onDelete(operation) {
    this.operationsService.deleteOperation(operation);
    this.getOperationList();
  }
}
