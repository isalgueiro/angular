import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cf-row',
  template: `
    <li>
      {{ operation | json }}
    </li>

  `,
  styles: []
})
export class RowComponent implements OnInit {

  @Input() public operation: any;

  constructor() { }

  ngOnInit() {
  }

}
