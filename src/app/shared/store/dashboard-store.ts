import { inject } from "@angular/core";
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from "@ngrx/signals";
import { InitialState } from "./dashboard-state";
import { ProductsResponse, ProductsFilter, Product } from "../models/products";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { FilteredProductsBuilder } from "./dashboard-helper";
import { ProductsService } from "../../feature/services/products-service";

export const DashboardStore = signalStore(
  { providedIn: "root" },
  withState(InitialState),
  withProps(() => ({})),
  withMethods((store) => ({
    toggleSidenav: () => {
      patchState(store, { sidenavOpen: !store.sidenavOpen() });
    },
    setProductsFilter: (filter: Partial<ProductsFilter>) => {
      patchState(store, {
        productsFilter: { ...store.productsFilter(), ...filter },
      });
    },
  })),
  withComputed((store) => ({
    getProducts: () => {
      let filter = store.productsFilter();
      let products = FilteredProductsBuilder(filter, [
        ...store.products(),
      ]);
      const startIndex = (filter.pageNumber - 1) * filter.pageSize;
      return products.slice(startIndex, startIndex + filter.pageSize);
    },
    totalProducts: () => {
      let products = FilteredProductsBuilder(store.productsFilter(), [
        ...store.products(),
      ]);
      return products.length;
    },
  })),
  withHooks({
    async onInit(store, http = inject(HttpClient),productsService = inject(ProductsService)) {
      const productsResponse = await firstValueFrom(productsService.getProducts$());
      patchState(store, {
        products: productsResponse.products,
        totalProducts: productsResponse.total,
      });
    },
  })
);
