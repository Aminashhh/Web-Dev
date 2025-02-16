import {Component} from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/assets/logo.svg" alt="Angular logo" width = "32" height = "32" priority/>
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width = "32" height = "32" priority/>
      </li>
    </ul>
    <div class="image-container">
        <img ngSrc="www.example.com/image.png" fill />
    </div>
  `,
  imports: [NgOptimizedImage],
  providers: [
    provideImgixLoader('https://my.base.url/'),
  ]
})
export class UserComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
