import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { WelcomeComponent } from "app/home/welcome.component";
import { ProductListComponent } from "app/container/products/product-list.component";
import { ProductDetailGuard } from "app/container/products/product-guard.service";
import { ProductDetailComponent } from "app/container/products/product-detail.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id',
            canActivate: [ ProductDetailGuard ], 
            component: ProductDetailComponent }
        ])
    ], 
    exports: [ RouterModule ]
})

export class ProductRoutingModule {}