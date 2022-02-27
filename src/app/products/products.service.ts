import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Products } from "./products";

@Injectable()
export class ProductsService {
  protected UrlServiceV1: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.UrlServiceV1}/products`);
  }
}