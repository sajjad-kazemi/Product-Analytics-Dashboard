import { Component, inject, Input, input, OnInit, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../../services/products-service";

@Component({
  selector: "app-product-detail",
  standalone: false,
  template: `
    <div>
      <button
        matButton="text"
        routerLink="/products"
        class="flex items-center gap-1 mb-3"
      >
        <mat-icon> arrow_back </mat-icon>
        <span class="capitalize">
        Back to Products
      </span>
      </button>
      <p>
        {{ productId() }}
      </p>
    </div>
  `,
  styles: ``,
  
})
export class ProductDetails implements OnInit {
  productId = signal(0);
  productsService = inject(ProductsService)
  
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId.set(Number(this.route.snapshot.paramMap.get("productId")));
  }
}
