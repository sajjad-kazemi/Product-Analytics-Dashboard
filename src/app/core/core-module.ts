import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Sidenav } from "./layout/sidenav/sidenav";
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "../app-routing-module";
import {
  MatSidenavContent,
  MatSidenavContainer,
  MatSidenav,
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
  providers: [HttpClient],
  exports:[Header,Footer,Sidenav]
})
export default class CoreModule {}
