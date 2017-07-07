// import statement
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "app/container/products/product-list.component";
import { ProductFilterPipe } from "app/container/products/product-filter.pipe";
import { ProductDetailComponent } from "app/container/products/product-detail.component";
import { StarComponent } from "app/container/shared/star.component";
import { ProductDetailGuard } from "app/container/products/product-guard.service";
import { ProductService } from "app/container/products/product.service";

// add the NgModule decorator
@NgModule({
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        StarComponent,
        ProductDetailComponent
    ],
    imports: [
        // for ngModel and two way binding
        FormsModule,
        // for common directives such as *ngIf *ngFor
        CommonModule,
        RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { path: 'product/:id',
        canActivate: [ ProductDetailGuard ], 
        component: ProductDetailComponent }
        ])
    ],
    providers: [ 
        ProductService,
        ProductDetailGuard
    ]
})
// export class
export class ProductModule {}