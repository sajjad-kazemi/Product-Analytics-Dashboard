import { Component, signal } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header></app-header>
      <app-sidenav class="flex-1 h-full block">
        <main class="px-[10%] my-6">
          <router-outlet />
        </main>
      </app-sidenav>
      <app-footer></app-footer>
    </div>
  `,
  standalone: false,
  styles: [],
})
export class App {
  protected title = "Product-Analytics-Dashboard";
}
