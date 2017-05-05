import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-list',
  template: `
    <p>
      list Works!
    </p>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  public operations;
  constructor(public data: DataService) { }

  ngOnInit() {
    this.operations = this.data.operations;
  }

}
