import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { ProductsService } from './products/products.service';
import { MenuComponent } from './navigation/menu/menu.component';
import { HomeComponent } from './navigation/home/home.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AboutComponent } from './institutional/about/about.component';
import { ContactComponent } from './institutional/contact/contact.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { CartComponent } from './products/cart/cart.component';
import { ProductDatailsComponent } from './products/product-datails/product-datails.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent,
    ListProductsComponent,
    CartComponent,
    ProductDatailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig)]
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
