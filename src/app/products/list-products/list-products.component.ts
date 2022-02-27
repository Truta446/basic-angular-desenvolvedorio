import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
})
export class ListProductsComponent implements OnInit, OnDestroy {

  public products: Products[];
  productsSubscription?: Subscription;

  constructor(private productsService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.productsSubscription?.unsubscribe();
  }
}
