import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import FeatureModule from "./feature/feature-module";
import CoreModule from "./core/core-module";
import SharedModule from "./shared/shared-module";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { urlModifierInterceptor } from "./core/interceptors/url-modifier-interceptor";
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptors([urlModifierInterceptor])),
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [App],
})
export class AppModule {}
