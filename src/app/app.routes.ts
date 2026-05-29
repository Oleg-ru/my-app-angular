import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';

export const routes: Routes = [
  {path: 'home', component: Home, title: 'Home Page'},
  {path: 'user', component: User, title: 'Title Page'},
];
