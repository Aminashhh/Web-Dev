import {Component} from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form 
        [formGroup] = "profileForm"
        (ngSubmit) = "handleSubmit()">
      <h2> Profile Form </h2>
      <label>
        <p>Name: {{profileForm.value.name}}</p>
        <input type="text" formControlName = "name" />
      </label>
      <label>
        <p>Email: {{profileForm.value.email}}</p>
        <input type="email" formControlName = "email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class AppComponent {
    profileForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
    });
    handleSubmit(){
        alert(
            this.profileForm.value.name + '|' + this.profileForm.value.email
        );
    }
}
