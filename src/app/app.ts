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
  selector: 'app-person',
  template: ` <button [disabled]="isSubmit" class="btn">Нажми меня</button> <div [contentEditable]="isEditable">Это двчик</div>`,
  styles: `
    .btn {
      padding: 10px;
    }
  `
})
export class Person {
  isSubmit = false;
  isEditable = true;
}

@Component({
  selector: 'app-message',
  template: `<div>
    <div>
      <span>Сообщение -></span>
      <span>{{ message }}</span>
    </div>
    <div>
      @if (message === '') {
        <button (click)="changeMsg()">Показать сообщение</button>
      } @else {
        <button (click)="deleteMsg()">Удалить сообщение</button>
      }
    </div>
  </div>`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      border: 2px solid blueviolet;
      padding: 10px;
    }
  `,
})
export class Message {
  message = '';
  changeMsg = () => {
    this.message = 'Ура, новое сообщение 💬';
  };
  deleteMsg = () => {
    this.message = '';
  };
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
      <div>
        <ul>
          @for (system of operatingSystems; track system.id) {
            <li class="item">
              <div>🔑 Id: {{ system.id }}</div>
              <hr />
              <div>📎 Name: {{ system.name }}</div>
            </li>
          }
        </ul>
      </div>
    </div>
    <div class="right">
      <app-user />
      <ul>
        @for (user of users; track user.id) {
          <li class="item user">
            {{user.name}}
          </li>
        }
      </ul>
      <app-person/>
      <app-message />
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
    .item {
      width: 50%;
      margin-top: 5px;
      list-style: none;
      border: 1px solid brown;
      border-radius: 5px;
      padding: 5px;
    }
    .user {
      color: cornflowerblue;
    }
  `,
  imports: [User, Person, Message],
})
export class App {
  protected readonly title = signal('my-app');
  city = 'San Francisco';
  isServerRunning = true;
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'macOS' },
    { id: 'linux', name: 'Linux' },
  ];
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}
