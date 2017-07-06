// define the class
// component metadata
// component decorator

import { Component } from "@angular/core";

@Component({
    // pm project manager
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = "Product List";
}