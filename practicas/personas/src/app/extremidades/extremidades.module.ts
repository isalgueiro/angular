import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtremidadesComponent } from './extremidades.component';
import { BrazoComponent } from './brazo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExtremidadesComponent, BrazoComponent],
  exports: [ExtremidadesComponent]
})
export class ExtremidadesModule { }
