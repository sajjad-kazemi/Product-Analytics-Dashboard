# Project Architecture - Product Analytics Dashboard

This document explains the architecture, folder structure, and key modules of the **Product Analytics Dashboard** built with **Angular 20**, **Angular Material**, **Tailwind CSS**, **NgRx SignalStore**, **ngx-datatable**, **ng2-charts**, and **ng-owl-carousel-o**.

---

## 1. Modules Overview

The project is organized into **three main Angular modules**:

### 1.1 Feature Module
- Contains all **pages** and **feature-specific services**.
- Handles its own **routing** for lazy loading.
- Pages:
  - `Introduction` – Introduction to the dashboard and features.
  - `Products` – Displays a table of products with filtering, sorting, and pagination.
  - `ProductDetails` – Shows detailed product information, images carousel, and charts.  
  - `NotFound` – 404 page for unknown routes.
- Components:
  - `FilterForm` – Located in `products/components`, used for filtering and searching products.
- Services:
  - `ProductsService` – Handles HTTP requests to fetch products using filters.

---

### 1.2 Shared Module
- Contains **reusable components, models, and store logic**.
- Folders:
  - `layout/` – Application layout components:
    - `Header`, `Footer`, `SideNav`.
  - `models/` – Interfaces and types:
    - `products.ts` – Defines the `Product` interface.
  - `store/` – NgRx SignalStore and related helpers:
    - `dashboard-store.ts` – SignalStore managing products and filters.
    - `dashboard-state.ts` – Defines state interface and initial state.
    - `dashboard-helper.ts` – Utility functions used by the store.

---

### 1.3 Core Module
- Contains **singleton services and interceptors**.
- Interceptors:
  - `UrlIdentifierInterceptor` – Automatically prefixes URLs without `http://` or `https://` with `https://dummyjson.com`.  
    Ensures all API requests use the default backend URL if missing.

---

## 2. Folder Structure
```
src/
└─ app/
   ├─ core/
   │  └─ interceptors/
   │     └─ url-identifier.interceptor.ts
   │
   ├─ shared/
   │  ├─ layout/
   │  │  ├─ header/
   │  │  ├─ footer/
   │  │  └─ sidenav/
   │  │
   │  ├─ models/
   │  │  └─ products.ts
   │  │
   │  └─ store/
   │     ├─ dashboard-store.ts
   │     ├─ dashboard-state.ts
   │     └─ dashboard-helper.ts
   │
   └─ feature/
      ├─ pages/
      │  ├─ introduction/
      │  ├─ products/
      │  │  └─ components/
      │  │     └─ filter-form/
      │  ├─ product-details/
      │  └─ not-found/
      │
      └─ services/
         └─ products.service.ts
```

## 3. Key Features and Patterns

- **Feature-based modular architecture** for scalability and maintainability.
- **Lazy-loaded routing** for feature modules.
- **NgRx SignalStore** used for managing product list state and filters.
- **Separation of concerns**:
  - Store contains state and logic.
  - Services handle HTTP requests.
  - Components consume state via signals or observables.
- **Reusability**:
  - Shared layout components and models.
- **Interceptors** for request preprocessing (`UrlIdentifierInterceptor`).

---

## 4. Best Practices Applied

- Strong typing and use of **interfaces** (`Product`, `ProductsFilter`).
- **Dependency Injection** used for services and stores.
- **Reactive Forms** for filter input.
- **RxJS** + `async` pipe to manage data streams without manual subscriptions.
- **ChangeDetectionStrategy.OnPush** where appropriate for performance.
- Modular structure allows easy extension for future features.

---

## 5. Notes

- Consider moving `product-details` to its **own page folder** under `feature/pages` for consistency.
- All API calls use the **ProductsService** with the store filter as the source.
- Layout components (`Header`, `Footer`, `SideNav`) are fully reusable across pages.
