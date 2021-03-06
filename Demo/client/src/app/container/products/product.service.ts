import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// map operator using the special syntax that loads the operator
// without actually importing anything.
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product'; 

@Injectable()

export class ProductService {
    // private _productUrl = 'api/products/products.json';
    private _productUrl = 'http://localhost:3333/api/products/products.json';

    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
        .map((res: Response) => <IProduct[]> res.json())
        .do(data => console.log('All: '+JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    /*
    x.then(valueFn, errorFn) // Promise
    x.subcribe(valueFn, errorFn) // Observable
    let sub = x.subcribe(valueFn, errorFn, completeFn) // Observable

    */
}