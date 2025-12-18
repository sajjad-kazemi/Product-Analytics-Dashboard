import { Product, ProductsFilter } from "../models/products";

export type DashboardState = {
  sidenavOpen: boolean;
  productsFilter: ProductsFilter;
  totalProducts: number;
  products: Product[];
};

export const InitialState: DashboardState = {
  sidenavOpen: false,
  productsFilter: {
    pageNumber: 1,
    pageSize: 10,
  } as ProductsFilter,
  totalProducts: 0,
  products: [],
};
