import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <app-coche></app-coche>
  `,
  styles: []
})
export class AppComponent {
  title = 'Mi cocherito leré';
}
