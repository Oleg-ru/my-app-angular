import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './app-form.html',
  styleUrl: './app-form.scss',
})
export class AppForm {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  handleSubmit = () => {
    alert(`${this.profileForm.value.name} | ${this.profileForm.value.email}`)
  }
}
