import { Component } from '@angular/core';
import { ProductService } from './container/products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProductService ]
})
export class AppComponent {
  title = 'Product Management';
}
