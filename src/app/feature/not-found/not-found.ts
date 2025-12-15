import { Component } from "@angular/core";

@Component({
  selector: "app-not-found",
  standalone: false,
  template: `
    <div class="flex justify-center items-center h-[calc(90vh)] py-6">
      <div
        class="flex flex-col items-center justify-center text-center bg-white rounded-xl shadow p-8 gap-6"
      >
        <mat-icon class="!text-red-600 !h-[56px] !w-[56px] !text-[56px]"
          >close_circle</mat-icon
        >
        <h2 class="font-semibold text-red-600 text-2xl font-bold">
          Page Not Found!
        </h2>
        <p class="text-gray-600">Please enter the right URL</p>
        <button
          matButton="filled"
          color="primary"
          class="w-full max-w-xs"
          routerLink="/"
        >
          Back To Products
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export default class NotFound {}
