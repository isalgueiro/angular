import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public operations: any[];

  constructor() {
    this.operations = [];
  }

}
