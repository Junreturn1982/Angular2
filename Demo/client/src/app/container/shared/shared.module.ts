
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { StarComponent } from "app/container/shared/star.component";


// NgModule decorator
@NgModule({
    declarations: [ StarComponent ],
    imports: [ CommonModule ],
    // reuse the SharedModule
    exports: [
         // CommonModule for common directives such as *ngIf *ngFor
        CommonModule,
        // FormsModule for ngModel and two way binding
        FormsModule,
        StarComponent
    ]
})
export class SharedModule {

}