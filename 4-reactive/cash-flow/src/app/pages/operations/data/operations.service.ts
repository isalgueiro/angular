import { Operation } from './operation.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OperationsService {

  private operations: Operation[];

  constructor() {
    this.operations = [];
  }

  getOperations(): Operation[] {
    return this.operations;
  }

  newOperation(): Operation {
    return new Operation(new Date(), 0, 1, "");
  }

  saveOperation(newOperation: Operation) {
    const operation = Object.assign({}, newOperation);
    operation._id = new Date().getTime().toString();
    this.operations.push(operation);
  }

  deleteOperation(operation: Operation) {
    let index: number = this.operations.indexOf(operation);
    if (index !== -1) {
      this.operations.splice(index, 1);
    }
  }
}
