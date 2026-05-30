import { Component, inject, input, output } from '@angular/core';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppForm } from './app-form/app-form';
import { CarService } from './services/car.service';

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
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    User,
    Person,
    Message,
    NgOptimizedImage,
    RouterOutlet,
    RouterLink,
    AppForm,
    UpperCasePipe,
  ],
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
  carService = inject(CarService);
  displayCar = this.carService.getCars().join(' 🚔 ');
}
