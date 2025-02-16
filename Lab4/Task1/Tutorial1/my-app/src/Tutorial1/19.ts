import {Component, inject} from '@angular/core';
import {CarService} from './19_service';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class AppComponent {
  carService = inject(CarService);
}
