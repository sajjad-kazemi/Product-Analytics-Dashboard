import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FeatureRoutingModule } from "./feature-routing-module";
import Products from "./products/products";
import NotFound from "./not-found/not-found";
import { ProductsService } from "./services/products-service";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ProductDetails } from "./products/product-details/product-details";
import { FilterForm } from "./products/components/filter-form/filter-form";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCard } from "@angular/material/card";
import { NgSelectModule } from "@ng-select/ng-select";
import { MatChipsModule } from "@angular/material/chips";
import { CarouselModule } from "ngx-owl-carousel-o";
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from "ng2-charts";

@NgModule({
  declarations: [Products, NotFound, ProductDetails, FilterForm],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatIconModule,
    MatButtonModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCard,
    MatChipsModule,
    NgSelectModule,
    CarouselModule,
    BaseChartDirective,
  ],
  providers: [ProductsService],
})
export default class FeatureModule {}
