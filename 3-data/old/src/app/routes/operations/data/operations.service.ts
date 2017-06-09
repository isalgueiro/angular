import { Operation } from './operation.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OperationsService {

  private operations: Operation[];
  public numOps: number = 0;
  constructor() {
    this.operations = [];
  }

  getOperations(): Operation[] {
    return this.operations;
  }

  newOperation(): Operation {
    const newOperation = new Operation("", new Date(), 0);
    newOperation.description = 'Description not provided';
    return newOperation;
  }

  saveOperation(newOperation: Operation): Operation {
    const operation = this.cloneOperation(newOperation);
    operation._id = new Date().getTime().toString();
    this.operations.push(operation);
    this.numOps++;
    return operation;
  }

  cloneOperation(originalOperation: Operation): Operation {
    const targetOperation = Object.assign({}, originalOperation);
    return targetOperation;
  }

  deleteOperation(operation: Operation) {
    let index: number = this.operations.indexOf(operation);
    if (index !== -1) {
      this.operations.splice(index, 1);
      this.numOps--;
    }
  }
}
