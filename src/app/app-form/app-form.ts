import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './app-form.html',
  styleUrl: './app-form.scss',
})
export class AppForm {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit = () => {
    alert(`${this.profileForm.value.name} | ${this.profileForm.value.email}`)
  }
}
