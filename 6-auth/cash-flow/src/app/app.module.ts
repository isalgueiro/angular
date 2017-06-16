import { SharedModule } from './core/shared/shared.module';
import { LayoutModule } from './core/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BusService } from "app/bus.service";
import { Http, XHRBackend, RequestOptions } from "@angular/http";
import { HttpService } from "app/http.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [
    BusService,
    {
      provide: Http,
      useClass: HttpService,
      deps: [XHRBackend, RequestOptions, BusService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
