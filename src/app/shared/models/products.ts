export type Product = {
  id: number;
  title: string;
  description:string;
  category:string;
  price:number;
  rating:number;
  stock:number;
};

export type ProductsFilter = {
    search:string;
    category:string;
    pageNumber:number;
    pageSize:number;
    sortBy:string;
    order:string;
};

export interface ProductsResponse {
  products: Product[];
  total: number;
}

export interface Category {
  slug:string;
  name:string;
  url:string;
}