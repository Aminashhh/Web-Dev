import {Component, inject} from '@angular/core';
import {CarService} from './20_service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{display}}</p>
  `,
})
export class AppComponent {
  carService = inject(CarService);  
  display = '';

  constructor() {
    this.display = this.carService.getCars().join('⭐️');
  }
}
