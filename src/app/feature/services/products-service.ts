import { effect, inject, Injectable } from '@angular/core';
import FeatureModule from '../feature-module';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, Observable, of, shareReplay, switchMap } from 'rxjs';
import { PagedProducts, Product, ProductsFilter } from '../../shared/models/products';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DashboardStore } from '../../shared/store/dashboard-store';

@Injectable({
  providedIn: FeatureModule,
})
export class ProductsService {
  http = inject(HttpClient)
  store = inject(DashboardStore);

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('/products');
  }
  private filter$ = new BehaviorSubject<ProductsFilter>(this.store.productsFilter());

  private _syncEffect = effect(() => {
    const f = this.store.productsFilter();
    this.filter$.next(f);
  });

  public readonly products$: Observable<PagedProducts> = this.filter$.pipe(
    debounceTime(200),

    distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),

    switchMap((filter) => this.fetchWithFilter(filter)),

    shareReplay({ bufferSize: 1, refCount: true })
  );

  private fetchWithFilter(filter: ProductsFilter): Observable<PagedProducts> {
    const pageNumber = Math.max(1, filter.pageNumber ?? 1);
    const pageSize = Math.max(1, filter.pageSize ?? 10);
    const skip = (pageNumber - 1) * pageSize;


    let request$: Observable<any>;

    if (filter.category) {
      const params = new HttpParams()
        .set('limit', String(pageSize))
        .set('skip', String(skip));
      request$ = this.http.get<{ products: Product[]; total: number }>(
        `/products/category/${encodeURIComponent(filter.category)}`,
        { params }
      );
    } else if (filter.search) {
      const params = new HttpParams()
        .set('q', filter.search)
        .set('limit', String(pageSize))
        .set('skip', String(skip));
      request$ = this.http.get<{ products: Product[]; total: number }>(
        `/products/search`,
        { params }
      );
    } else {
      const params = new HttpParams()
        .set('limit', String(pageSize))
        .set('skip', String(skip));
      request$ = this.http.get<{ products: Product[]; total: number }>(
        `/products`,
        { params }
      );
    }

    return request$.pipe(
      map((resp) => {
        let items: Product[] = resp.products ?? [];
        const total: number = resp.total ?? items.length;

        if (filter.sortBy) {
          const key = filter.sortBy as keyof Product;
          const order = (filter.order ?? 'asc').toLowerCase() === 'asc' ? 1 : -1;
          items = items.slice().sort((a, b) => {
            const va = a[key];
            const vb = b[key];

            if (typeof va === 'number' && typeof vb === 'number') {
              return (va - vb) * order;
            }
            return String(va).localeCompare(String(vb)) * order;
          });
        }

        return {
          items,
          total,
          pageNumber,
          pageSize
        } as PagedProducts;
      }),

      catchError((err) => {
        console.error('ProductsQueryService.fetchWithFilter error', err);
        return of({
          items: [],
          total: 0,
          pageNumber,
          pageSize
        } as PagedProducts);
      })
    );
  }

  refresh() {
    this.filter$.next(this.filter$.value);
  }

}
