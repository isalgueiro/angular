import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './cabeza/cabeza.component';
import { OjoComponent } from './ojo/ojo.component';
import { BocaComponent } from './boca/boca.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CabezaComponent, OjoComponent, BocaComponent],
  exports: [CabezaComponent]
})
export class CabezaModule { }
