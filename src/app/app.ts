import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `Username: {{ username }}`,
})
export class User {
  username = 'Rembo';
}


@Component({
  selector: 'app-root',
  template: `
    <div class="left">
      Hello Universe. My city: {{ city }} Any: {{ 1 * 3 + 2 }}
      @if (isServerRunning) {
        <div class="running">Yes, server is running 🔫</div>
      } @else {
        <div>No, server stopped ❌</div>
      }
    </div>
    <div class="right">
      <app-user />
    </div>
  `,
  styles: `
    :host {
      height: 100vh;
      color: #a144eb;
      border: 2px dotted red;
      padding: 1rem;
      display: flex;
      gap: 10px;
    }
    .left,
    .right {
      width: 50%;
      border: 1px solid red;
      height: max-content;
    }
    .running {
      color: green;
    }
  `,
  imports: [User],
})
export class App {
  protected readonly title = signal('my-app');
  city = 'San Francisco';
  isServerRunning = true;
}
