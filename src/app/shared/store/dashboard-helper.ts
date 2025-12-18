import { Product, ProductsFilter } from "../models/products";

export function FilteredProductsBuilder(filter: ProductsFilter, products: Product[]) {
  if (filter.category) {
    products = products.filter(
      (product) => product.category == filter.category
    );
  }
  if (filter.search) {
    products = products.filter((product) =>
      product.title
        .toLocaleLowerCase()
        .includes(filter.search.toLocaleLowerCase())
    );
  }
  if (filter.sortBy){
    products = sortByProp(products,filter.sortBy,filter.order)
  }
  return products;
}


export function sortByProp(arr:any[], prop:string, order = 'asc') {
  if (!Array.isArray(arr)) throw new TypeError('First argument must be an array');
  if (!prop || typeof prop !== 'string') throw new TypeError('prop must be a string');

  const dir = String(order).toLowerCase() === 'desc' ? -1 : 1;
  return [...arr].sort((a, b) => {
    const va = a == null ? undefined : a[prop];
    const vb = b == null ? undefined : b[prop];

    if (va == null && vb == null) return 0;
    if (va == null) return 1;
    if (vb == null) return -1;

    // numeric compare if both are numbers
    if (typeof va === 'number' && typeof vb === 'number') {
      return (va - vb) * dir;
    }

    // try numeric-like strings
    const sa = String(va).trim();
    const sb = String(vb).trim();
    const na = Number(sa);
    const nb = Number(sb);
    if (!Number.isNaN(na) && !Number.isNaN(nb)) {
      return (na - nb) * dir;
    }

    return sa.localeCompare(sb, undefined, { numeric: true, sensitivity: 'base' }) * dir;
  });
}