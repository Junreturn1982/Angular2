// define the class
// component metadata
// component decorator

import { Component, OnInit } from "@angular/core";

import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
    // pm project manager
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    // inject service in constructor
    constructor(private _productService: ProductService) {

    }
    // lifecycle hook
    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
    
}