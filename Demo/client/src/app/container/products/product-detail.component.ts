import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    // the activated route instance is then  injected 
    // into this component class.
    constructor(private _route: ActivatedRoute, 
                private _router: Router) {

    }
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
