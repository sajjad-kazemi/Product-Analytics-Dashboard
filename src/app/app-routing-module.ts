import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import FeatureModule from "./feature/feature-module";

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./feature/feature-module')
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FeatureModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
