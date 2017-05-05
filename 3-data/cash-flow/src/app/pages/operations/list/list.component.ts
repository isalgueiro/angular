import { DataService } from './../data.service';
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
  constructor(public data: DataService) { }

  ngOnInit() {
    this.operations = this.data.getOperations();
  }

  onDelete(operation) {
    this.data.deleteOperation(operation);
    this.operations = this.data.getOperations();
  }
}
