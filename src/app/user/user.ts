import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { disabled } from '@angular/forms/signals';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  favoriteFramework = '';
  showFramework = () => {
    if (this.favoriteFramework)
      alert(this.favoriteFramework);
  }
  protected readonly disabled = disabled;
}
