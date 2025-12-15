import { Product } from "../models/products";

export type DashboardState = {
    sidebarOpen:boolean;
    products:Product[];
} 

export const InitialState:DashboardState = {
    sidebarOpen:true,
    products:[]
}