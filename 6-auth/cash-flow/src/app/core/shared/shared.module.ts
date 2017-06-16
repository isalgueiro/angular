import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './forms/error/error.component';
import { ControlComponent } from './forms/control/control.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    ErrorComponent,
    ControlComponent
  ],
  providers: []
})
export class SharedModule { }
