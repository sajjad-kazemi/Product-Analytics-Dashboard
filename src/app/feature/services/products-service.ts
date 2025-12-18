import { Category, ProductsFilter } from "./../../shared/models/products";
import { inject, Injectable } from "@angular/core";
import FeatureModule from "../feature-module";
import {
  BehaviorSubject,
  Observable,
} from "rxjs";
import { ProductsResponse, Product } from "../../shared/models/products";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: FeatureModule,
})
export class ProductsService {
  http = inject(HttpClient);

  private filter$ = new BehaviorSubject<ProductsFilter>({
    category: "",
    pageNumber: 1,
    pageSize: 10,
    search: "",
    order: "",
    sortBy: "",
  });

  setProductsFilter(filter: ProductsFilter) {
    this.filter$.next(filter);
  }

  public getProducts$(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>("/products", {
      params: {
        limit: 1000,
        skip: 0,
      },
    });
  }

  public getSingleProduct$(productId: number): Observable<Product> {
    return this.http.get<Product>("/products/" + productId);
  }

  public getCategories$(): Observable<Category[]> {
    return this.http.get<Category[]>("/products/categories");
  }
}
