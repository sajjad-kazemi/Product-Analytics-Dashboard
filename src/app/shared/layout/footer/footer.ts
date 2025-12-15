import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: false,
  template: `
    <footer class="w-full text-gray-500 py-6 mt-10">
      <div class="mx-auto grid grid-cols-3 gap-4 place-items-center w-full">
        <div class="flex items-center gap-2">
          <mat-icon class="text-gray-400">favorite</mat-icon>
          <span class="text-lg font-semibold">Product Analytics Dashboard</span>
        </div>

        <nav class="flex gap-6 text-sm">
          <a
            mat-button
            class="text-gray-500 hover:text-black transition cursor-pointer"
            routerLink="/"
            >Home</a
          >
          <a
            mat-button
            class="text-gray-500 hover:text-black transition cursor-pointer"
            routerLink="/"
            >About</a
          >
          <a
            mat-button
            class="text-gray-500 hover:text-black transition cursor-pointer"
            routerLink="/"
            >Contact</a
          >
        </nav>

        <div class="flex gap-4">
          <button mat-icon-button>
            <mat-icon class="text-gray-300 hover:text-white transition"
              >map</mat-icon
            >
          </button>
          <button mat-icon-button>
            <mat-icon class="text-gray-300 hover:text-white transition"
              >linkedin</mat-icon
            >
          </button>
          <button mat-icon-button>
            <mat-icon class="text-gray-300 hover:text-white transition"
              >facebook</mat-icon
            >
          </button>
        </div>
      </div>

      <div class="text-center text-xs mt-4 text-gray-500">
        © {{ currentYear }} Product Analytics Dashboard — All Rights Reserved
      </div>
    </footer>
  `,
  styles: ``,
})
export class Footer {
  currentYear = new Date().getFullYear();
}
