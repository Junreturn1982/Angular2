import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './container/contact-list/contact-list.component';
import { ProductListComponent } from "./container/products/product-list.component";
import { ProductFilterPipe } from "./container/products/product-filter.pipe";
import { StarComponent } from "app/container/shared/star.component";


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
