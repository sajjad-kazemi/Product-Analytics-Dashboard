import { Component, inject } from '@angular/core';
import { DashboardStore } from '../../store/dashboard-store';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
    <mat-toolbar class="w-full shadow-sm py-2">
      <div class="max-w-[1300px] mx-auto w-full flex items-center justify-between">
        <span class="flex items-center font-bold">
          <button matIconButton (click)="toggleSidenav()"><mat-icon>{{store.sidenavOpen() ? "close" : "menu"}}</mat-icon></button>
          <button matIconButton="elevated" routerLink="/products">
            <mat-icon>home</mat-icon>
          </button>
          <span routerLink="/products" class="my-auto cursor-pointer">Dashboard</span>
        </span>
        <div>
          Products
        </div>
    </div>
    </mat-toolbar>
  `,
  styles: ``,
})
export class Header {
  store = inject(DashboardStore);

  toggleSidenav(){
    this.store.toggleSidenav()
  }
}
