import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ContactListComponent } from './container/contact-list/contact-list.component';
import { ProductListComponent } from "./container/products/product-list.component";
import { ProductDetailComponent } from "./container/products/product-detail.component";
import { ProductFilterPipe } from "./container/products/product-filter.pipe";
import { StarComponent } from "app/container/shared/star.component";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactListComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // 404 not found page
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
