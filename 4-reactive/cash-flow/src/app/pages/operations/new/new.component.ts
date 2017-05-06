import { Operation } from './../data/operation.model';
import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-new',
  templateUrl: './new.component.html',
  styles: []
})
export class NewComponent implements OnInit {
  public operation: Operation;
  constructor(public operationsService: OperationsService) { }

  ngOnInit() {
    this.createNewOperation();
  }

  createNewOperation() {
    this.operation = this.operationsService.newOperation();
  }

  saveOperation() {
    this.operationsService.saveOperation(this.operation);
    this.createNewOperation();
  }

}
