export type Product = {
  id: number;
  name: string;
};

export type ProductsFilter = {
    search:string;
    category:string;
    pageNumber:number;
    pageSize:number;
    sortBy:string;
    order:string;
};

export interface PagedProducts {
  items: Product[];
  total: number;
  pageNumber: number;
  pageSize: number;
}