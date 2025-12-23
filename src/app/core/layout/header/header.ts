import { Component, inject } from "@angular/core";
import { DashboardStore } from "../../../shared/store/dashboard-store";

@Component({
  selector: "app-header",
  standalone: false,
  template: `
    <mat-toolbar class="w-full py-2 border border-gray-300">
      <div
        class="max-w-[1300px] mx-auto w-full flex items-center justify-between"
      >
        <span class="flex items-center font-bold">
          <button matIconButton (click)="toggleSidenav()">
            <mat-icon>{{ store.sidenavOpen() ? "close" : "menu" }}</mat-icon>
          </button>
          <button matIconButton="elevated" routerLink="/">
            <mat-icon>home</mat-icon>
          </button>
          <span routerLink="/" class="my-auto cursor-pointer">Dashboard</span>
        </span>
        <div>
          <button matIconButton [matMenuTriggerFor]="menu">
            <mat-icon>person</mat-icon>
          </button>
          <button matIconButton>
            <mat-icon>exit_to_app</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item disabled="true">Admin</button>
            <button mat-menu-item>Profile</button>
            <button mat-menu-item>Exit<mat-icon>exit_to_app</mat-icon></button>
          </mat-menu>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: ``,
})
export class Header {
  store = inject(DashboardStore);

  toggleSidenav() {
    this.store.toggleSidenav();
  }
}
