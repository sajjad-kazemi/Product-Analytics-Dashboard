import { Product, ProductsFilter } from "../models/products";

export type DashboardState = {
    sidenavOpen:boolean;
    productsFilter:ProductsFilter
}


export const InitialState:DashboardState = {
    sidenavOpen:false,
    productsFilter:{} as ProductsFilter
}