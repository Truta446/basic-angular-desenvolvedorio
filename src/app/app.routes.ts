import { Routes } from "@angular/router";

import { CartComponent } from "./products/cart/cart.component";
import { HomeComponent } from "./navigation/home/home.component";
import { AboutComponent } from "./institutional/about/about.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ListProductsComponent } from "./products/list-products/list-products.component";
import { ProductDatailsComponent } from "./products/product-datails/product-datails.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'features', component: DataBindingComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'products/:id', component: ProductDatailsComponent },
]
