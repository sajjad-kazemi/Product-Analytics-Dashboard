import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Products from './pages/products/products';
import NotFound from './pages/not-found/not-found';
import { ProductDetails } from './pages/product-details/product-details';
import { Introduction } from './pages/introduction/introduction';

const routes: Routes = [
  {
    path:'',
    redirectTo:'introduction',
    pathMatch:'full'
  },
  {
    path:'introduction',
    component:Introduction
  },
  {
    path:'not-found',
    component:NotFound
  },
  {
    path:'products',
    component:Products
  },
  {
    path:'products/:productId',
    component:ProductDetails
  },
  {
    path:'**',
    redirectTo:'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
