import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { AppRoutingModule } from "../app-routing-module";
import { Sidenav } from "./layout/sidenav/sidenav";
import {
  MatSidenavContent,
  MatSidenavContainer,
  MatSidenav,
  MatDrawer,
} from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu"

@NgModule({
  declarations: [Header, Footer, Sidenav],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavContent,
    MatSidenavContainer,
    MatSidenav,
    MatListModule,
    MatMenuModule,
  ],
  exports: [Header, Footer, Sidenav],
})
export default class SharedModule {}
