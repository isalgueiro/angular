import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-new',
  template: `
    <p>
      new Works!
    </p>
  `,
  styles: []
})
export class NewComponent implements OnInit {
  public operation: any;
  constructor(public data: DataService) { }

  ngOnInit() {
  }

  saveOperation() {
    this.data.operations.push(this.operation);
  }

}
