import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _router: Router) {}
    // route snapshot: map route
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // localhost:4200/product/1
        // route.url[0].path: product, route.url[1].path: 1
        console.log(route.url)
        // + convert to number, pull the path from the second element
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/products']);
            // abort current navigation
            return false;
        }
        return true;
    }
}