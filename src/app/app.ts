import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `Hello Universe`,
  styles: `
    :host {
      color: #a144eb;
      border: 2px dotted red;
      padding: 1rem;
    }
  `,
})
export class App {
  protected readonly title = signal('my-app');
}
