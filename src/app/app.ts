import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-person',
  template: `
    <div>
      <button [disabled]="isSubmit" class="btn">Нажми меня</button>
      <div [contentEditable]="isEditable">Это двчик</div>
    </div>
    <div>
      <ul class="persons-container">
        @for (person of inputPersons(); track person.id) {
          <li>
            {{ person.name }}
          </li>
        }
      </ul>
    </div>`,
  styles: `
    .btn {
      padding: 10px;
    }
    .persons-container {
      border: 1px dotted green;
      padding: 5px;
      border-radius: 10px;
      width: max-content;
    }
    li {
      border-bottom: 1px solid;
      list-style: none;
    }
  `,
})
export class Person {
  isSubmit = false;
  isEditable = true;
  inputPersons = input<Array<{ id: number; name: string }>>();
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
  selector: 'app-add-user-form',
  template: `
    <div class="form-user">
      <h3>СОздать пользователя:</h3>
      <button (click)="createNewUser()">Создать</button>
  </div>`,
  styles: `
    .form-user {
      border: 2px solid black;
      border-radius: 10px;
      padding: 10px;
    }
  `,
})
export class AddUserForm {
  newUser = output<{id: number; name: string}>()
  createNewUser = () => {
    this.newUser.emit({id: 2, name: "Rudik"});
  }
}

@Component({
  selector: 'app-user',
  template: ` <app-add-user-form (newUser)="addUser($event)"/>
    <div>
      <ul>
        @for (user of userList; track user.id) {
          <li>{{ user.name }}</li>
        }
      </ul>
    </div>`,
  imports: [AddUserForm],
})
export class User {
  userList = [{ id: Date.now(), name: 'Xuzin' }];
  addUser = (user: { id: number; name: string }) => {
    this.userList.push(user);
  };
}

@Component({
  selector: 'app-root',
  template: `
    <div style="border: 1px solid black; padding: 10px">
      <nav>
        <a routerLink="/home">Home</a>
        <a routerLink="/user">User</a>
      </nav>
      <router-outlet />
    </div>
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
      <app-person [inputPersons]="users" />
      <img [ngSrc]="redHeart" alt="logo" width="264" height="191" priority />
    </div>
    <div class="right">
      <app-user />
      @defer (on timer(100)) {
        <ul>
          @for (user of users; track user.id) {
            <li class="item user">
              {{ user.name }}
            </li>
          }
        </ul>
      } @placeholder {
        Пользователи
      } @loading (minimum 2s) {
        <div>🔭Загрузка пользователей...</div>
      }

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
    a {
      text-decoration: none;
      border: 1px solid black;
      padding: 2px;
      margin-right: 5px;
    }
  `,
  imports: [User, Person, Message, NgOptimizedImage, RouterOutlet, RouterLink],
})
export class App {
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
  redHeart = '/red.jpeg';
}
