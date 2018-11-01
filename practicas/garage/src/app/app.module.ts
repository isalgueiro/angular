import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CocheComponent } from './coche/coche.component';
import { SalpicaderoComponent } from './salpicadero/salpicadero.component';
import { PedalesComponent } from './pedales/pedales.component';
import { CocheService } from 'app/coche.service';

@NgModule({
  declarations: [
    AppComponent,
    CocheComponent,
    SalpicaderoComponent,
    PedalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CocheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
