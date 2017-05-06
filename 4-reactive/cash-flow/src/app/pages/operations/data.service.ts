import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private operations: any[];

  constructor() {
    this.operations = [];
  }

  getOperations() {
    return this.operations;
  }

  saveOperation(newOperation) {
    const operation = Object.assign({}, newOperation);
    operation.timeStamp = new Date();
    operation.id = operation.timeStamp.getTime();
    this.operations.push(operation);
  }

  deleteOperation(operation) {
    let index: number = this.operations.indexOf(operation);
    if (index !== -1) {
      this.operations.splice(index, 1);
    }
  }
}
