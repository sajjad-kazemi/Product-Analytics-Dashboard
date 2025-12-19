import { OwlOptions } from "./../../../../../node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d";
import { Component, inject, Input, input, OnInit, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../../services/products-service";
import { Observable } from "rxjs";
import { Product } from "../../../shared/models/products";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";

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
        <span class="capitalize"> Back to Products </span>
      </button>
      <mat-card appearance="outlined" class="p-3 drop-shadow-2xl">
        @if(productDetails | async; as product){
        <div class="w-full h-full grid grid-cols-1 md:grid-cols-5 gap-5">
          <div class="col-span-5 md:col-span-3 flex flex-col">
            <div class="flex gap-6 align-center items-center mb-3">
              <h1 class="text-2xl font-semibold">{{ product.title }}</h1>
              <mat-chip-set>
                @for(item of product.tags; track $index){
                <mat-chip>{{ item }}</mat-chip>
                }
              </mat-chip-set>
            </div>
            <p class="text-[clamp(1rem,20px,1.6rem)] font-meduim">
              {{ product.description }} Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Exercitationem natus ipsum repellendus
              voluptatibus, magnam consequatur rerum ducimus assumenda? Rerum
              laboriosam corrupti sequi aliquam deserunt quia, itaque non.
              Veniam, modi sint repellendus qui illo ipsa delectus animi.
              Officiis reprehenderit nulla dolore vero corrupti maiores quis
              quae aut, quos velit assumenda excepturi.
            </p>

            <div
              class="mt-4 border-t pt-4 grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm"
            >
              <div>
                <h4 class="text-md text-gray-600 font-medium">
                  Price: \${{ product.price }}
                </h4>
              </div>
              <div>
                <h5 class="text-gray-600 font-medium">Dimensions (cm)</h5>
                <div class="mt-2 text-gray-800 space-y-1">
                  <div>
                    Width:
                    <span class="font-semibold">{{
                      product.dimensions.width
                    }}</span>
                  </div>
                  <div>
                    Height:
                    <span class="font-semibold">{{
                      product.dimensions.height
                    }}</span>
                  </div>
                  <div>
                    Depth:
                    <span class="font-semibold">{{
                      product.dimensions.depth
                    }}</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 class="text-gray-600 font-medium">Weight</h5>
                <div class="mt-2 text-gray-800">
                  <span class="font-semibold">{{ product.weight }}</span>
                  <span class="text-gray-500"> kg</span>
                </div>
              </div>

              <div>
                <h5 class="text-gray-600 font-medium">Rating</h5>
                <div class="mt-2 flex items-center">
                  <div class="relative text-lg leading-none select-none">
                    <div
                      class="absolute inset-0 overflow-hidden text-yellow-400"
                      [style.width.%]="ratingPercentage(product.rating)"
                    >
                      ★★★★★
                    </div>
                    <div class="text-gray-300">★★★★★</div>
                  </div>
                  <span class="ml-3 text-sm text-gray-600"
                    >{{ product.rating }} / 5</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-5 md:col-span-2">
            <owl-carousel-o [options]="imagesConfig">
              @for(image of product.images; track $index){
              <ng-template carouselSlide>
                <div>
                  <img
                    [src]="image"
                    [alt]="'missing image of ' + product.title"
                    class="h-full object-contain"
                  />
                </div>
              </ng-template>
              }
            </owl-carousel-o>
          </div>
        </div>
        <div class="mt-3 flex flex-col md:flex-row items-center gap-4">
          <div class="w-full md:w-1/2">
            <div class="h-64 md:h-96 p-2 bg-white rounded shadow">
              <canvas
                baseChart
                [data]="reportChartData"
                [options]="reportChartOptions"
                type="bar"
                class="w-full h-full block"
              >
              </canvas>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="h-64 md:h-96 p-2 bg-white rounded shadow">
              <canvas
              baseChart
              [data]="pieChartData"
              [options]="pieChartOptions"
              type="pie"
              class="w-full h-full block m-auto"
              >
            </canvas>
          </div>
          </div>
        </div>
        }
      </mat-card>
    </div>
  `,
  styles: ``,
})
export class ProductDetails implements OnInit {
  productId = signal(0);
  productsService = inject(ProductsService);
  productDetails = new Observable<Product>();
  constructor(private readonly route: ActivatedRoute) {}
  ngOnInit(): void {
    this.productId.set(Number(this.route.snapshot.paramMap.get("productId")));
    this.productDetails = this.productsService.getSingleProduct$(
      this.productId()
    );
  }

  imagesConfig: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: true,
    items: 1,
    navText: [
      '<span class="text-md">‹</span>',
      '<span class="text-md">›</span>',
    ],
  };
  reportChartData: ChartData<"bar"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: Array.from(
          { length: 12 },
          () => Math.floor(Math.random() * 9001) + 1000
        ),
        label: "Sales",
      },
    ],
  };
  reportChartOptions: ChartConfiguration<"bar">["options"] = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  pieChartOptions: ChartConfiguration["options"] = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales by Channel",
      },
    },
  };
  pieChartLabels: string[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales",
  ];
  pieChartData: ChartData<"pie", number[], string> = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [3000, 4000, 2000, 1000], // example values: download, in-store, mail-order
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 8,
      },
    ],
  };

  ratingPercentage(r: number): number {
    return (Math.max(0, Math.min(5, r)) / 5) * 100;
  }
}
