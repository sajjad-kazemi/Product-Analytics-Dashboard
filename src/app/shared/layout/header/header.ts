import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
    <mat-toolbar class="w-full shadow-sm py-2">
      <div class="max-w-[1300px] mx-auto w-full flex items-center justify-between">
        <span class="flex items-center font-bold">
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

}
