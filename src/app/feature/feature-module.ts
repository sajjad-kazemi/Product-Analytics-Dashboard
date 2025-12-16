import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button"
import { FeatureRoutingModule } from "./feature-routing-module";
import { MatSidenavModule } from "@angular/material/sidenav";
import Products from "./products/products";
import NotFound from "./not-found/not-found";
import { ProductsService } from "./services/products-service";

@NgModule({
  declarations: [Products, NotFound],
  imports: [CommonModule, FeatureRoutingModule, MatIconModule, MatButtonModule],
  providers: [ProductsService]
})
export default class FeatureModule {}
