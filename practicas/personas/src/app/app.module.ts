import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabezaModule } from 'app/cabeza/cabeza.module';
import { TroncoModule } from 'app/tronco/tronco.module';
import { ExtremidadesModule } from 'app/extremidades/extremidades.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CabezaModule,
    TroncoModule,
    ExtremidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
