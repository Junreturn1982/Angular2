// import statement
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/container/shared/shared.module";

import { ProductListComponent } from "app/container/products/product-list.component";
import { ProductFilterPipe } from "app/container/products/product-filter.pipe";
import { ProductDetailComponent } from "app/container/products/product-detail.component";
import { ProductDetailGuard } from "app/container/products/product-guard.service";
import { ProductService } from "app/container/products/product.service";
import { ProductRoutingModule } from "app/container/products/product-routing.module";

// add the NgModule decorator
@NgModule({
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    providers: [ 
        ProductService,
        ProductDetailGuard
    ]
})
// export class
export class ProductModule {}