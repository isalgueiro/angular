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

  saveOperation(operation) {
    this.operations.push(operation);
  }
}
