import { Component } from '@angular/core';

@Component({
  selector: 'cf-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'cf works!';
}
