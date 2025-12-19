import { Component, inject, signal } from "@angular/core";
import { DashboardStore } from "../../store/dashboard-store";

@Component({
  selector: "app-sidenav",
  standalone: false,
  template: `
    <mat-sidenav-container class="h-full">
      <mat-sidenav [opened]="store.sidenavOpen()" mode="side" class="max-w-[15%] rounded-md">
        <mat-list class="h-[100%] rounded-md bg-[#ddd] capitalize [& *]:line-clamp-2">
          <mat-list-item>
            <a routerLink="/introduction" routerLinkActive="font-bold" class="w-full text-fg-brand bg-gray-300 block rounded-xl p-2 mt-2">
              introduction
            </a>
          </mat-list-item>
          <mat-list-item>
            <a routerLink="/products" routerLinkActive="font-bold" class="w-full text-fg-brand bg-gray-300 block rounded-xl p-2">
              products
            </a>
          </mat-list-item>
          <mat-list-item>
            <a routerLink="/test-product" routerLinkActive="font-bold" class="w-full text-fg-brand bg-gray-300 block rounded-xl p-2">
              test product
            </a>
          </mat-list-item>
          <mat-list-item>
            <a routerLink="/customer-management" routerLinkActive="font-bold" class="w-full text-fg-brand bg-gray-300 block rounded-xl p-2">
              manage custommers
            </a>
          </mat-list-item>
          <mat-list-item>
            <a routerLink="/customer-management" routerLinkActive="font-bold" class="w-full text-fg-brand bg-gray-300 block rounded-xl p-2">
              manage orders
            </a>
          </mat-list-item>
          <mat-list-item>
            <a routerLink="/customer-management" routerLinkActive="font-bold" class="w-full text-fg-brand bg-gray-300 block rounded-xl p-2">
              users
            </a>
          </mat-list-item>
          <mat-list-item>
            <a routerLink="/customer-management" routerLinkActive="font-bold" class="w-full text-fg-brand bg-gray-300 block rounded-xl p-2">
              profile
            </a>
          </mat-list-item>
        </mat-list>
      </mat-sidenav>
      <mat-sidenav-content class="min-h-[70vh]">
        <div class="min-h-[100%]">
          <ng-content></ng-content>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: ``,
})
export class Sidenav {
  store = inject(DashboardStore);
}
