import { Component } from "@angular/core";

@Component({
  selector: "app-introduction",
  standalone: false,
  template: `
    <div class="flex items-center justify-center min-h-[50vh] bg-gray-50 px-4">
      <mat-card class="max-w-3xl p-6 shadow-lg rounded-xl text-center bg-white">
        <h1 class="text-3xl font-bold mb-4 text-gray-800">
          Welcome to Product Analytics Dashboard
        </h1>

        <p class="text-gray-700 mb-4">
          This dashboard displays a list of products with full
          <strong>sorting</strong> and <strong>filtering</strong> support. You
          can open the product details by double-clicking a row or clicking on
          the product title.
        </p>

        <p class="text-gray-700 mb-4">
          Product images are displayed with a <strong>carousel</strong> using
          <em>ng-owl-carousel-o</em>, and sales data is visualized using
          <strong>ng2-charts</strong> with a <strong>bar chart</strong> for
          monthly sales and a <strong>pie chart</strong> for sales status.
        </p>

        <p class="text-gray-600 text-sm">
          Built with <strong>Angular 20</strong>, <strong>Tailwind CSS</strong>,
          <strong>Angular Material</strong>, <strong>NgRx SignalStore</strong>,
          <strong>RxJS</strong>, and <strong>ngx-datatable</strong>.
        </p>

        <button matButton="filled" routerLink="/products" class="mt-6">
          Expore Products
        </button>
      </mat-card>
    </div>
  `,
  styles: ``,
})
export class Introduction {}
