import { Operation } from './operation.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OperationsService {

  private operations: Operation[];

  constructor() {
    this.operations = [];
  }

  getOperations() {
    return this.operations;
  }

  newOperation() {
    return new Operation("", new Date(), 0);
  }

  saveOperation(newOperation) {
    const operation = Object.assign({}, newOperation);
    operation.id = new Date().getTime();
    this.operations.push(operation);
  }

  deleteOperation(operation) {
    let index: number = this.operations.indexOf(operation);
    if (index !== -1) {
      this.operations.splice(index, 1);
    }
  }
}
