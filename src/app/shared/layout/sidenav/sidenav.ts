import { Component, signal } from "@angular/core";

@Component({
  selector: "app-sidenav",
  standalone: false,
  template: `
    <mat-sidenav-container class="h-full">
      <mat-sidenav [opened]="sidenavOpen()" mode="side" class="max-w-[15%]">
        <mat-list>
          <mat-list-item>
            <button matButton="tonal" routerLink="/products" class="w-full">products</button>
          </mat-list-item>
          <mat-list-item>
            <button matButton="tonal" routerLink="/not-found" class="w-full">not found</button>
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
  sidenavOpen = signal(true);
}
