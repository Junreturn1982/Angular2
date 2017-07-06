import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './container/contact-list/contact-list.component';
import { ProductListComponent } from "./container/products/product-list.component";
import { ProductFilterPipe } from "./container/products/product-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ProductListComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
