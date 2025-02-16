import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
// import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
  
}
