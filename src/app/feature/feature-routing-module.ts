import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Products from './products/products';
import NotFound from './not-found/not-found';

const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
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
    path:'**',
    redirectTo:'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
