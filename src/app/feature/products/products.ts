import {
  ActivateEvent,
  ColumnMode,
  PageEvent,
  SelectionType,
  SortEvent,
} from "@swimlane/ngx-datatable";
import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { DashboardStore } from "../../shared/store/dashboard-store";
import { TableColumn } from "@swimlane/ngx-datatable";
import { Product, ProductsFilter } from "../../shared/models/products";
import { Router } from "@angular/router";

@Component({
  selector: "app-products",
  standalone: false,
  template: `
    <div class="flex flex-col justify-center align-center">
      <app-filter-form (submitForm)="filterSubmit($event)" />
      <ngx-datatable
        class="material"
        [rows]="products()"
        [columns]="tableColumns"
        [columnMode]="ColumnMode.force"
        [headerHeight]="40"
        [footerHeight]="50"
        rowHeight="auto"
        [loadingIndicator]="loading()"
        [externalPaging]="true"
        [externalSorting]="true"
        (page)="onPage($event)"
        (sort)="onSort($event)"
        [limit]="store.productsFilter.pageSize()"
        [count]="store.totalProducts()"
        trackByProp="id"
        (activate)="onRowSelect($event)"
        [selectionType]="SelectionType.single"
        [offset]="store.productsFilter().pageNumber - 1"
        
      >
      </ngx-datatable>
    </div>
  `,
})
export default class Products implements OnInit {
  title = inject(Title);
  store = inject(DashboardStore);
  router = inject(Router);

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  loading = signal(false);
  tableColumns: TableColumn[] = [
    { name: "Title" },
    { name: "Category" },
    { name: "Price" },
  ];
  products = this.store.getProducts;
  ngOnInit(): void {}

  onPage(event: PageEvent) {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.store.setProductsFilter({ pageNumber: event.offset + 1 });
    }, 500);
  }

  onSort(event: SortEvent) {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      let { dir, prop } = event.sorts[0];
      this.store.setProductsFilter({
        sortBy: prop.toString(),
        order: dir.toString(),
      });
    }, 500);
  }

  filterSubmit(event:any){
    console.log('emit:',event)
    this.store.setProductsFilter({search:event.search,category:event.category})
  }

  onRowSelect(event: ActivateEvent<Product>) {
    if (event.type == "dblclick") {
      this.router.navigate(["/products", event.row.id]);
    }
  }
}
