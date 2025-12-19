export type Product = {
  id: number;
  title: string;
  description:string;
  category:string;
  price:number;
  rating:number;
  stock:number;
  tags:string[];
  images:string[];
  dimensions:{width:number,height:number,depth:number};
  thumbnail:string;
  weight:number;
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