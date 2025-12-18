import { Component, inject, OnInit, output } from "@angular/core";
import { DashboardStore } from "../../../../shared/store/dashboard-store";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { FilterFormGroup } from "../../models/filter-form";
import { ProductsService } from "../../../services/products-service";

@Component({
  selector: "app-filter-form",
  standalone: false,
  template: `
    <div class="w-full">
      <form [formGroup]="filterForm" (submit)="submitForm.emit(filterForm.value)" class="flex flex-row justify-center align-baseline gap-3">
        <mat-form-field MatFormField appearance="outline">
          <mat-label>Search</mat-label>
          <input
            matInput
            placeholder="Search by name"
            formControlName="search"
            type="text"
          />
        </mat-form-field>
        <mat-form-field MatFormField appearance="outline">
          <mat-label>Category</mat-label>
          <mat-select formControlName="category" placeholder="Select category">
            <mat-option [value]="null">None</mat-option>
            @for(category of categories | async; track $index){
            <mat-option [value]="category.slug">
              {{ category.name }}
            </mat-option>
            }
          </mat-select>
        </mat-form-field>
        <button type="submit" matButton="filled" class="!my-auto">
          Search
        </button>
      </form>
    </div>
  `,
  styles: ``,
})
export class FilterForm implements OnInit {
  store = inject(DashboardStore);
  fb = inject(FormBuilder);
  submitForm = output<typeof this.filterForm.value>();
  productsService = inject(ProductsService);
  categories = this.productsService.getCategories$();
  filterForm = new FormGroup<FilterFormGroup>({
    category: new FormControl(""),
    search: new FormControl(""),
  });

  ngOnInit(): void {
    let filter = this.store.productsFilter();
    this.filterForm.controls.category.setValue(filter.category);
    this.filterForm.controls.search.setValue(filter.search);
  }
}
