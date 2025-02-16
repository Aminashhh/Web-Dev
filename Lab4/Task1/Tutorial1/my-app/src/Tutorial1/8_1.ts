import {Component} from '@angular/core';
import {UserComponent} from './8';

@Component({
  selector: 'app-root',
  template: `
    <app-user name="Simran"></app-user>
  `,
  imports: [UserComponent],
})
export class AppComponent {}
